import React from 'react';
import { ArrowLeft, ChevronRight, LogOut, User as UserIcon, BookOpen } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { bookData } from '../data/bookData';
import { useAuth } from '../contexts/AuthContext';

export function TOC() {
  const navigate = useNavigate();
  const { logout, user, userName } = useAuth();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const displayName = userName ? userName.split(' ')[0] : 'Leitor';

  return (
    <div className="min-h-screen bg-[#fdfaf9] dark:bg-zinc-950 p-6 font-sans text-[#1f2937] dark:text-gray-200 relative">
      <div className="max-w-2xl mx-auto pb-20 mt-4">
        <div className="flex items-center justify-between mb-8 border-b border-gray-200 dark:border-zinc-800 pb-4">
          <div className="flex items-center">
            <Link to="/" className="p-2 -ml-2 text-gray-500 hover:text-rose-700 transition" aria-label="Voltar para o início">
              <ArrowLeft size={20} />
            </Link>
            <h2 className="text-[0.8rem] font-bold text-rose-700 dark:text-rose-400 uppercase tracking-widest ml-2">Sumário</h2>
            
            {(user?.email === 'phrosperar@gmail.com' || user?.email === 'prmarciog@gmail.com') && (
              <button 
                onClick={() => navigate('/admin')}
                className="ml-4 text-[0.7rem] bg-rose-100 text-rose-700 px-3 py-1 rounded-full font-bold hover:bg-rose-200 transition"
              >
                Gerenciar Acessos
              </button>
            )}

            <button 
              onClick={() => navigate('/my-reflections')}
              className="ml-4 flex items-center text-[0.7rem] bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full font-bold hover:bg-emerald-200 transition"
            >
              <BookOpen size={12} className="mr-1" />
              <span className="hidden sm:inline">Minhas Reflexões</span>
              <span className="sm:hidden">Reflexões</span>
            </button>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300 font-medium">
              <UserIcon size={16} className="text-rose-700" />
              <span>Olá, {displayName}</span>
            </div>
            
            <div className="w-px h-4 bg-gray-300 dark:bg-gray-700"></div>

            <button 
              onClick={handleLogout}
              className="flex items-center text-sm font-bold text-gray-500 hover:text-rose-700 transition gap-2 group"
              title={`Sair de ${user?.email}`}
            >
              <span className="hidden sm:inline">Sair</span>
              <LogOut size={16} className="group-hover:-translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
        <div className="space-y-2">
          {bookData.map((chapter) => (
            <button
              key={chapter.id}
              onClick={() => navigate(`/reader/${chapter.id}`)}
              className="w-full text-left p-3.5 sm:p-3 px-4 rounded-lg text-base sm:text-[0.95rem] text-[#6b7280] dark:text-gray-400 cursor-pointer border border-transparent hover:bg-rose-50 dark:hover:bg-zinc-900 hover:text-rose-700 dark:hover:text-rose-400 transition flex justify-between items-center group font-medium"
            >
              <span className="leading-snug">{chapter.title}</span>
              <ChevronRight size={18} className="text-gray-400 group-hover:text-rose-700 dark:group-hover:text-rose-400 transition opacity-0 group-hover:opacity-100 flex-shrink-0 ml-2" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
