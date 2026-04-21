import React, { createContext, useContext, useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import { User } from '@supabase/supabase-js';

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

  const checkAccess = async (currentUser: User | null, forceRefresh = false) => {
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
      }
      
      const fetchProfileWithRetry = async (retries = 2) => {
        for (let i = 0; i < retries; i++) {
          try {
            const fetchPromise = supabase
              .from('profiles')
              .select('is_approved, full_name')
              .eq('id', currentUser.id)
              .single();
              
            const timeoutPromise = new Promise((resolve) => setTimeout(() => resolve({ error: new Error('Timeout da conexão'), data: null }), 15000));
            const result = await Promise.race([fetchPromise, timeoutPromise]) as any;
            
            if (result.error && result.error.message === 'Timeout da conexão') {
               console.warn(`Timeout na tentativa ${i + 1}. Supabase pode estar acordando (cold start)...`);
               if (i === retries - 1) return result;
               continue; // tentar de novo
            }
            return result;
          } catch (e) {
            if (i === retries - 1) throw e;
          }
        }
      };

      const { data, error } = await fetchProfileWithRetry(2);
        
      if (!error && data) {
        if (!admin) approved = data.is_approved;
        currentUserName = data.full_name;
        setDebugError('');
      } else {
        console.warn("Perfil não encontrado ou erro:", error);
        setDebugError(error?.message || 'Perfil não encontrado na tabela profiles');
      }

      setIsAdmin(admin);
      setIsApproved(approved);
      setUserName(currentUserName);

    } catch (err: any) {
      console.error("Erro no checkAccess:", err);
      setIsAdmin(false);
      setIsApproved(false);
      setUserName(null);
      setDebugError(err?.message || 'Erro desconhecido');
    }
  };

  useEffect(() => {
    let mounted = true;
    
    const fallbackTimer = setTimeout(() => {
       if (mounted) setIsLoaded(true);
    }, 4000);

    supabase.auth.getSession().then(async ({ data: { session } }) => {
      if (!mounted) return;
      setUser(session?.user ?? null);
      if (session?.user) {
         await checkAccess(session.user, true); // initial load force refresh
      } else {
         await checkAccess(null);
      }
      setIsLoaded(true);
      clearTimeout(fallbackTimer);
    }).catch((err) => {
      console.error("Erro no getSession:", err);
      if (mounted) setIsLoaded(true);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange(async (_event, session) => {
      if (!mounted) return;
      setUser(session?.user ?? null);
      
      if (_event === 'SIGNED_IN') {
        await checkAccess(session?.user ?? null, true);
      } else {
        await checkAccess(session?.user ?? null);
      }
      setIsLoaded(true);
    });

    return () => {
      mounted = false;
      subscription.unsubscribe();
      clearTimeout(fallbackTimer);
    };
  }, []);

  const ensureProfileExists = async (currentUser: User, name?: string) => {
    try {
      const { error } = await supabase.from('profiles').upsert([{ 
        id: currentUser.id, 
        email: currentUser.email,
        full_name: name || currentUser.user_metadata?.full_name || null,
        is_approved: false // Default to false so Admin has to approve manually
      }], { onConflict: 'id' });
      
      if (error) {
         console.warn("Could not upsert profile row:", error);
      }
    } catch (err) {}
  };

  const login = async (email: string, pass: string): Promise<AuthResponse> => {
    try {
      const { error, data } = await supabase.auth.signInWithPassword({
        email,
        password: pass,
      });
      
      if (error) {
        if (error.message.includes('Email not confirmed')) {
          return { success: false, error: 'Confirmação pendente. Verifique seu e-mail.' };
        }
        if (error.message === 'Invalid login credentials') {
          return { success: false, error: 'E-mail não encontrado ou senha incorreta.' };
        }
        throw error;
      }
      
      if (data.user) {
        await ensureProfileExists(data.user);
      }
      
      await checkAccess(data.user, true);
      return { success: true };
    } catch (err: any) {
      return { success: false, error: err.message || 'Erro ao realizar login.' };
    }
  };

  const register = async (email: string, pass: string, name?: string): Promise<AuthResponse> => {
    try {
      // Usamos uma URL limpa sem query params para evitar o erro "Invalid path specified in request URL" do Kong/GoTrue
      const cleanRedirectUrl = typeof window !== 'undefined' ? window.location.origin : undefined;

      const { error, data } = await supabase.auth.signUp({
        email,
        password: pass,
        options: {
          data: { full_name: name || '' },
          emailRedirectTo: cleanRedirectUrl
        }
      });

      if (error) {
         if (error.message.includes('rate limit') || error.message.includes('exceeded')) {
              return { success: false, error: 'Aguarde alguns minutos antes de tentar cadastrar novamente (Proteção de rede).' };
         }
         if (error.message.includes('already registered')) {
              return { success: false, error: 'Este e-mail já possui um cadastro. Por favor, faça login.' };
         }
         return { success: false, error: `Erro técnico: ${error.message}` };
      }
      
      if (data.user) {
         await ensureProfileExists(data.user, name);
      }
      
      if (!data.session) {
         // O e-mail de confirmação foi enviado, ou o usuário precisa logar
         return { success: true }; // Vamos retornar sucesso para não travar o Fluxo! Se o login estiver liberado sem e-mail, ele vai passar.
      }

      await checkAccess(data.user, true);
      return { success: true };
      
    } catch (err: any) {
      return { success: false, error: err.message || 'Falha na conexão ao criar a conta.' };
    }
  };

  const logout = async () => {
    await supabase.auth.signOut();
    setUser(null);
    setUserName(null);
    setIsAdmin(false);
    setIsApproved(false);
    setDebugError('');
  };

  const refreshAccess = async () => {
    if (user) {
      await checkAccess(user, true);
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
