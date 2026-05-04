import React, { createContext, useContext, useState, useEffect } from 'react';
import { auth, db, handleFirestoreError, OperationType } from '../lib/firebase';
import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signOut, 
  onAuthStateChanged, 
  User 
} from 'firebase/auth';
import { doc, getDoc, setDoc } from 'firebase/firestore';

interface AuthResponse {
  success: boolean;
  error?: string;
}

interface AuthContextType {
  user: User | null;
  userName: string | null;
  isAdmin: boolean;
  isApproved: boolean;
  login: (email: string, pass: string) => Promise<AuthResponse>;
  register: (email: string, pass: string, name?: string) => Promise<AuthResponse>;
  logout: () => Promise<void>;
  refreshAccess: () => Promise<void>;
  isAuthenticated: boolean;
  isLoaded: boolean;
  debugError?: string; // Add debug info
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [userName, setUserName] = useState<string | null>(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isApproved, setIsApproved] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [debugError, setDebugError] = useState<string>('');

  const checkAccess = async (currentUser: User | null) => {
    try {
      if (!currentUser) {
        setIsAdmin(false);
        setIsApproved(false);
        setUserName(null);
        setDebugError('');
        return;
      }
      
      let approved = false;
      let admin = false;
      let currentUserName = null;

      // Admin check 
      if (currentUser.email === 'phrosperar@gmail.com' || currentUser.email === 'prmarciog@gmail.com') {
        admin = true;
        approved = true;
        
        // Ensure admin document exists for rules matching
        try {
          const adminDoc = doc(db, 'admins', currentUser.uid);
          const adminSnap = await getDoc(adminDoc);
          if (!adminSnap.exists()) {
             await setDoc(adminDoc, { email: currentUser.email }, { merge: true });
          }
        } catch(e) {}
      }
      
      const fetchProfileWithRetry = async (retries = 2) => {
        for (let i = 0; i < retries; i++) {
          try {
            const profileRef = doc(db, 'profiles', currentUser.uid);
            const profileSnap = await getDoc(profileRef);
            
            if (profileSnap.exists()) {
              return { data: profileSnap.data(), error: null };
            } else {
              return { data: null, error: new Error('Document does not exist') };
            }
          } catch (e: any) {
            if (i === retries - 1) throw e;
          }
        }
      };

      const result = await fetchProfileWithRetry(2);
        
      if (!result?.error && result?.data) {
        if (!admin) approved = result.data.is_approved;
        currentUserName = result.data.full_name;
        setDebugError('');
      } else {
        console.warn("Perfil não encontrado ou erro:", result?.error);
        setDebugError(result?.error?.message || 'Perfil não encontrado na tabela profiles');
      }

      setIsAdmin(admin);
      setIsApproved(approved);
      setUserName(currentUserName);

    } catch (err: any) {
      console.error("Erro no checkAccess:", err);
      setIsAdmin(false);
      setIsApproved(false);
      setUserName(null);
      let errorMsg = err?.message || 'Erro desconhecido';
      if (errorMsg.includes('Failed to fetch') || errorMsg.includes('network error')) {
         errorMsg = 'Falha na conexão com o Banco de Dados. Verifique a internet ou desative os bloqueadores.';
      }
      setDebugError(errorMsg);
    }
  };

  useEffect(() => {
    let mounted = true;
    
    const fallbackTimer = setTimeout(() => {
       if (mounted) setIsLoaded(true);
    }, 4000);

    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (!mounted) return;
      setUser(currentUser);
      
      if (currentUser) {
        await checkAccess(currentUser);
      } else {
        await checkAccess(null);
      }
      setIsLoaded(true);
      clearTimeout(fallbackTimer);
    }, (error) => {
      console.error("Erro no onAuthStateChanged:", error);
      if (error instanceof TypeError && error.message.includes('network')) {
         setDebugError("Falha de rede ao contatar o servidor de autenticação. Verifique sua conexão ou desative bloqueadores de anúncios.");
      }
      if (mounted) setIsLoaded(true);
    });

    return () => {
      mounted = false;
      unsubscribe();
      clearTimeout(fallbackTimer);
    };
  }, []);

  const ensureProfileExists = async (currentUser: User, name?: string) => {
    try {
      const profileRef = doc(db, 'profiles', currentUser.uid);
      const snap = await getDoc(profileRef);
      if (!snap.exists()) {
        await setDoc(profileRef, { 
          email: currentUser.email,
          full_name: name || currentUser.displayName || null,
          is_approved: false 
        });
      }
    } catch (err) {
      console.warn("Could not set profile doc:", err);
    }
  };

  const login = async (email: string, pass: string): Promise<AuthResponse> => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, pass);
      const user = userCredential.user;
      
      await ensureProfileExists(user);
      await checkAccess(user);
      return { success: true };
    } catch (err: any) {
      let errorMsg = err.message || 'Erro ao realizar login.';
      if (err.code === 'auth/user-not-found' || err.code === 'auth/wrong-password' || err.code === 'auth/invalid-credential') {
        errorMsg = 'E-mail não encontrado ou senha incorreta.';
      } else if (err.code === 'auth/network-request-failed') {
        errorMsg = 'Falha de rede. Verifique sua conexão com a internet.';
      }
      return { success: false, error: errorMsg };
    }
  };

  const register = async (email: string, pass: string, name?: string): Promise<AuthResponse> => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, pass);
      const user = userCredential.user;
      
      await ensureProfileExists(user, name);
      await checkAccess(user);
      return { success: true };
    } catch (err: any) {
      let errorMsg = err.message || 'Falha na conexão ao criar a conta.';
      if (err.code === 'auth/email-already-in-use') {
        errorMsg = 'Este e-mail já possui um cadastro. Por favor, faça login.';
      } else if (err.code === 'auth/network-request-failed') {
        errorMsg = 'Falha de rede. Servidor inacessível, verifique a conexão.';
      } else if (err.code === 'auth/too-many-requests') {
        errorMsg = 'Aguarde alguns minutos antes de tentar cadastrar novamente (Proteção de rede).';
      }
      return { success: false, error: errorMsg };
    }
  };

  const logout = async () => {
    await signOut(auth);
    setUser(null);
    setUserName(null);
    setIsAdmin(false);
    setIsApproved(false);
    setDebugError('');
  };

  const refreshAccess = async () => {
    if (user) {
      await checkAccess(user);
    }
  };

  return (
    <AuthContext.Provider value={{ user, userName, isAdmin, isApproved, login, register, logout, refreshAccess, isAuthenticated: !!user, isLoaded, debugError }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within an AuthProvider');
  return context;
};
