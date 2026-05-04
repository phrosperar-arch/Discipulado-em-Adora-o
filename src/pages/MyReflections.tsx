import React, { useEffect, useState } from 'react';
import { collection, query, getDocs } from 'firebase/firestore';
import { db, auth } from '../lib/firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, BookOpen, Clock, Loader2 } from 'lucide-react';
import { reflectionsMap } from '../data/reflectionsMap';

interface SavedReflection {
  id: string;
  content: string;
  updatedAt?: string;
  question?: string;
  chapterTitle?: string;
}

export function MyReflections() {
  const [reflections, setReflections] = useState<SavedReflection[]>([]);
  const [loading, setLoading] = useState(true);
  const [userId, setUserId] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserId(user.uid);
        fetchReflections(user.uid);
      } else {
        setUserId(null);
        setLoading(false);
      }
    });

    return () => unsubscribe();
  }, []);

  const fetchReflections = async (uid: string) => {
    try {
      const q = query(collection(db, "users", uid, "reflections"));
      const querySnapshot = await getDocs(q);
      const fetched: SavedReflection[] = [];
      querySnapshot.forEach((doc) => {
        if(doc.data().content?.trim()) {
           const data = doc.data();
           const mapInfo = reflectionsMap[doc.id] || {};
           fetched.push({ 
             id: doc.id, 
             ...data,
             question: data.question || mapInfo.question,
             chapterTitle: data.chapterTitle || mapInfo.chapterTitle
           } as SavedReflection);
        }
      });
      // Sort by updatedAt descending
      fetched.sort((a, b) => {
         const dateA = a.updatedAt ? new Date(a.updatedAt).getTime() : 0;
         const dateB = b.updatedAt ? new Date(b.updatedAt).getTime() : 0;
         return dateB - dateA;
      });
      setReflections(fetched);
    } catch (error) {
      console.error("Error fetching reflections", error);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString?: string) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('pt-BR', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }).format(date);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#f8f9fa] dark:bg-zinc-950 flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-rose-600" />
      </div>
    );
  }

  if (!userId) {
    return (
      <div className="min-h-screen bg-[#f8f9fa] dark:bg-zinc-950 flex flex-col items-center justify-center p-6 text-center">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">Minhas Reflexões</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-6">Você precisa estar logado para ver suas reflexões.</p>
        <button 
          onClick={() => navigate('/login')}
          className="bg-rose-600 hover:bg-rose-700 text-white px-6 py-2 rounded-lg font-medium transition"
        >
          Fazer Login
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f8f9fa] dark:bg-zinc-950 px-4 py-8 md:py-12 font-serif text-[#333] dark:text-gray-200">
      <div className="max-w-3xl mx-auto">
        <button 
          onClick={() => navigate('/toc')}
          className="flex items-center text-sm font-sans text-rose-600 hover:text-rose-700 dark:text-rose-400 dark:hover:text-rose-300 font-medium mb-8 transition-colors"
        >
          <ArrowLeft size={16} className="mr-1" />
          Voltar para o Índice
        </button>

        <header className="mb-10 block">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-slate-100 mb-3 tracking-tight">
            Minhas Reflexões
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 font-sans">
            Suas anotações e respostas salvas durante a leitura.
          </p>
        </header>

        {reflections.length === 0 ? (
          <div className="bg-white dark:bg-zinc-900 rounded-xl p-8 text-center border border-gray-200 dark:border-zinc-800 shadow-sm">
            <BookOpen className="w-12 h-12 md:w-16 md:h-16 text-gray-300 dark:text-gray-600 mx-auto mb-4" />
            <h3 className="text-xl font-medium text-gray-800 dark:text-gray-200 mb-2">Nenhuma reflexão salva ainda</h3>
            <p className="text-gray-500 dark:text-gray-400 mb-6 font-sans">
              À medida que você lê o livro e preenche os campos de alinhamento e prática, suas reflexões aparecerão aqui.
            </p>
            <button 
              onClick={() => navigate('/toc')}
              className="bg-rose-600 hover:bg-rose-700 text-white px-6 py-2 rounded-lg font-medium font-sans transition"
            >
              Começar a ler
            </button>
          </div>
        ) : (
          <div className="space-y-6">
            {reflections.map((ref) => (
              <div key={ref.id} className="bg-white dark:bg-zinc-900 rounded-xl p-6 border border-gray-200 dark:border-zinc-800 shadow-sm flex flex-col">
                <div className="flex items-center gap-2 mb-3 text-xs font-sans text-gray-500 dark:text-gray-400 whitespace-nowrap">
                  <Clock size={14} />
                  <span>Atualizado em: {formatDate(ref.updatedAt) || 'Recente'}</span>
                </div>
                {ref.chapterTitle && (
                  <div className="mb-2 inline-flex items-center text-xs font-medium bg-gray-100 dark:bg-zinc-800 text-gray-700 dark:text-gray-300 px-2.5 py-1 rounded-md max-w-max">
                    <BookOpen size={12} className="mr-1.5" />
                    {ref.chapterTitle}
                  </div>
                )}
                {ref.question && (
                  <p className="font-semibold text-rose-700 dark:text-rose-400 mb-2 font-sans">
                    {ref.question}
                  </p>
                )}
                <div className="bg-rose-50 dark:bg-rose-900/10 p-4 rounded-lg border border-rose-100 dark:border-rose-900/30">
                  <p className="whitespace-pre-wrap font-sans text-[0.95rem] text-gray-800 dark:text-gray-300">
                    {ref.content}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
