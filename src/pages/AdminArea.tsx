import React, { useEffect, useState } from 'react';
import { db, handleFirestoreError, OperationType } from '../lib/firebase';
import { collection, getDocs, updateDoc, deleteDoc, doc, query, orderBy } from 'firebase/firestore';
import { ShieldCheck, ArrowLeft, Check, X, Trash2, Edit2, Save, User as UserIcon } from 'lucide-react';
import { Link, Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

interface Profile {
  id: string;
  email: string;
  full_name: string | null;
  is_approved: boolean;
}

export function AdminArea() {
  const { isAdmin, user } = useAuth();
  const [profiles, setProfiles] = useState<Profile[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editName, setEditName] = useState('');
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const [actionError, setActionError] = useState<string | null>(null);

  const fetchProfiles = async () => {
    try {
      // Ordena primeiro por status de aprovação (false/pendente no topo) e depois por email
      const profilesRef = collection(db, 'profiles');
      const q = query(profilesRef, orderBy('is_approved', 'asc'), orderBy('email'));
      
      const snapshot = await getDocs(q);
      const data: Profile[] = snapshot.docs.map(docSnap => ({
        id: docSnap.id,
        ...docSnap.data()
      })) as Profile[];
      
      setProfiles(data);
    } catch (error) {
      console.error("Fetch profiles error: ", error);
      // fallback without composite index if it fails
      try {
        const fallbackSnapshot = await getDocs(collection(db, 'profiles'));
        const fallbackData = fallbackSnapshot.docs.map(docSnap => ({
          id: docSnap.id,
          ...docSnap.data()
        })) as Profile[];
        // Emulate local ordering
        fallbackData.sort((a, b) => {
           if (a.is_approved === b.is_approved) {
              return a.email.localeCompare(b.email);
           }
           return a.is_approved ? 1 : -1;
        });
        setProfiles(fallbackData);
      } catch (err) {
        handleFirestoreError(err, OperationType.LIST, 'profiles');
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!isAdmin) return;
    fetchProfiles();
  }, [isAdmin]);

  const toggleApproval = async (id: string, currentStatus: boolean) => {
    setActionError(null);
    try {
      const profileRef = doc(db, 'profiles', id);
      await updateDoc(profileRef, { is_approved: !currentStatus });
      setProfiles(prev => prev.map(p => p.id === id ? { ...p, is_approved: !currentStatus } : p));
    } catch (error) {
      setActionError("Erro ao atualizar status de liberação.");
      handleFirestoreError(error, OperationType.UPDATE, `profiles/${id}`);
    }
  };

  const startEditing = (profile: Profile) => {
    setEditingId(profile.id);
    setEditName(profile.full_name || '');
  };

  const saveEdit = async (id: string) => {
    setActionError(null);
    try {
      const profileRef = doc(db, 'profiles', id);
      await updateDoc(profileRef, { full_name: editName });
      setProfiles(prev => prev.map(p => p.id === id ? { ...p, full_name: editName } : p));
      setEditingId(null);
    } catch (error) {
      setActionError("Erro ao salvar o nome.");
      handleFirestoreError(error, OperationType.UPDATE, `profiles/${id}`);
    }
  };

  const confirmDelete = async (id: string) => {
    setActionError(null);
    try {
      const profileRef = doc(db, 'profiles', id);
      await deleteDoc(profileRef);
      setProfiles(prev => prev.filter(p => p.id !== id));
    } catch (error) {
      setActionError("Erro ao excluir. Podem haver registros vinculados.");
      handleFirestoreError(error, OperationType.DELETE, `profiles/${id}`);
    }
    setDeletingId(null);
  };

  if (!isAdmin) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div className="min-h-screen bg-[#fdfaf9] dark:bg-zinc-950 p-6 font-sans text-[#1f2937] dark:text-gray-200">
      <div className="max-w-2xl mx-auto pb-20 mt-4">
        <div className="flex items-center justify-between mb-8 border-b border-gray-200 dark:border-zinc-800 pb-4">
          <div className="flex items-center">
            <Link to="/toc" className="p-2 -ml-2 text-gray-500 hover:text-rose-700 transition" aria-label="Voltar para o sumário">
              <ArrowLeft size={20} />
            </Link>
            <h2 className="text-[0.8rem] font-bold text-rose-700 dark:text-rose-400 uppercase tracking-widest ml-2 flex items-center gap-2">
              <ShieldCheck size={16}/> Painel Admin
            </h2>
          </div>
        </div>

        <h1 className="text-2xl font-serif font-bold text-[#1f2937] dark:text-white mb-2">Gerenciar Leitores</h1>
        <p className="text-[#6b7280] dark:text-gray-400 mb-8 text-[0.95rem]">
          Verifique cadastros, libere acessos ou remova usuários do sistema.
        </p>

        {actionError && (
          <div className="bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 p-3 rounded-lg text-sm text-center border border-red-100 dark:border-red-900/30 mb-6">
            {actionError}
            <button onClick={() => setActionError(null)} className="ml-2 underline font-bold">X</button>
          </div>
        )}

        {loading ? (
          <div className="text-center py-10">Carregando usuários...</div>
        ) : (
          <div className="space-y-4">
            {profiles.length === 0 ? (
              <div className="text-center py-10 bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-xl">
                Nenhum usuário cadastrado ainda.
              </div>
            ) : (
              profiles.map(profile => (
                <div key={profile.id} className="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-xl shadow-sm gap-4">
                  
                  <div className="flex-1">
                    {editingId === profile.id ? (
                      <div className="flex items-center gap-2 mb-2">
                        <input 
                          type="text" 
                          value={editName}
                          onChange={(e) => setEditName(e.target.value)}
                          className="px-2 py-1 border border-gray-300 dark:border-zinc-700 rounded text-sm bg-white dark:bg-zinc-800 text-black dark:text-white"
                          placeholder="Nome Completo"
                        />
                        <button onClick={() => saveEdit(profile.id)} className="p-1.5 text-green-600 hover:bg-green-50 rounded">
                          <Save size={16} />
                        </button>
                        <button onClick={() => setEditingId(null)} className="p-1.5 text-gray-500 hover:bg-gray-100 rounded">
                          <X size={16} />
                        </button>
                      </div>
                    ) : (
                      <div className="flex items-center gap-2 mb-1">
                        <UserIcon size={16} className="text-gray-400" />
                        <span className="font-semibold text-[0.95rem] text-[#1f2937] dark:text-gray-200">
                          {profile.full_name || 'Sem nome'}
                        </span>
                        
                        {(profile.email !== 'phrosperar@gmail.com' && profile.email !== 'prmarciog@gmail.com') && (
                          <button onClick={() => startEditing(profile)} className="ml-2 text-gray-400 hover:text-rose-600 transition">
                            <Edit2 size={14} />
                          </button>
                        )}
                      </div>
                    )}
                    
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-gray-500">{profile.email}</span>
                      {(profile.email === 'phrosperar@gmail.com' || profile.email === 'prmarciog@gmail.com') && (
                        <span className="text-[0.65rem] bg-rose-100 text-rose-700 px-2 py-0.5 rounded-full font-bold uppercase tracking-wider">Admin</span>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 justify-end">
                    {(profile.email !== 'phrosperar@gmail.com' && profile.email !== 'prmarciog@gmail.com') && (
                      <>
                        {deletingId === profile.id ? (
                          <div className="flex items-center gap-2 animate-in fade-in">
                            <span className="text-xs text-red-600 font-medium">Excluir acesso?</span>
                            <button 
                              onClick={() => confirmDelete(profile.id)}
                              className="px-3 py-1 bg-red-600 text-white rounded text-xs font-bold hover:bg-red-700"
                            >
                              Sim
                            </button>
                            <button 
                              onClick={() => setDeletingId(null)}
                              className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded text-xs font-bold hover:bg-gray-300 dark:hover:bg-gray-600"
                            >
                              Não
                            </button>
                          </div>
                        ) : (
                          <>
                            <button 
                              onClick={() => toggleApproval(profile.id, profile.is_approved)}
                              className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-bold transition flex-1 sm:flex-none justify-center ${
                                profile.is_approved 
                                  ? 'bg-rose-50 text-rose-600 hover:bg-rose-100 dark:bg-rose-900/30 dark:hover:bg-rose-900/50' 
                                  : 'bg-green-600 text-white hover:bg-green-700'
                              }`}
                            >
                              {profile.is_approved ? <><X size={14}/> Bloquear</> : <><Check size={14}/> Liberar Acesso</>}
                            </button>
                            
                            {profile.id !== user?.uid && (
                              <button 
                                onClick={() => setDeletingId(profile.id)}
                                className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition"
                                title="Apagar usuário"
                              >
                                <Trash2 size={18} />
                              </button>
                            )}
                          </>
                        )}
                      </>
                    )}
                  </div>

                </div>
              ))
            )}
          </div>
        )}
      </div>
    </div>
  );
}
