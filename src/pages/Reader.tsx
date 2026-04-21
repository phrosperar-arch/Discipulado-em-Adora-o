import React, { useState, useRef, useEffect } from 'react';
import { List, Moon, Sun, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { bookData } from '../data/bookData';
import { useTheme } from '../hooks/useTheme';

export function Reader() {
  const { chapterId } = useParams<{ chapterId: string }>();
  const navigate = useNavigate();
  const { darkMode, toggleDarkMode } = useTheme();
  const scrollRef = useRef<HTMLElement>(null);

  const currentChapterIndex = parseInt(chapterId || '0', 10);
  const chapter = bookData.find(c => c.id === currentChapterIndex) || bookData[0];

  // Scroll to top of the reading area when the chapter changes
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo(0, 0);
    }
  }, [currentChapterIndex]);

  const goToPrev = () => {
    if (currentChapterIndex > 0) {
      navigate(`/reader/${currentChapterIndex - 1}`);
    }
  };

  const goToNext = () => {
    if (currentChapterIndex < bookData.length - 1) {
      navigate(`/reader/${currentChapterIndex + 1}`);
    }
  };

  // Swipe Handling (Virar a "página" pelo celular)
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [touchStartY, setTouchStartY] = useState<number | null>(null);
  const [touchEndY, setTouchEndY] = useState<number | null>(null);

  // Distância mínima para considerar que foi um arraste (Swipe)
  const minSwipeDistance = 75;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchEndY(null);
    setTouchStart(e.targetTouches[0].clientX);
    setTouchStartY(e.targetTouches[0].clientY);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
    setTouchEndY(e.targetTouches[0].clientY);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd || !touchStartY || !touchEndY) return;
    const distanceX = touchStart - touchEnd;
    const distanceY = Math.abs(touchStartY - touchEndY);
    
    const isLeftSwipe = distanceX > minSwipeDistance;
    const isRightSwipe = distanceX < -minSwipeDistance;

    // Se o usuário rolou mais para baixo (eixo Y) do que para os lados, ignora o swipe
    if (distanceY > Math.abs(distanceX)) return;

    if (isLeftSwipe) {
      goToNext(); // Arrasta pra esquerda -> Próximo capítulo
    } else if (isRightSwipe) {
      goToPrev(); // Arrasta pra direita -> Capítulo anterior
    }
  };

  return (
    <div className="h-screen flex flex-col bg-[#fdfaf9] dark:bg-[#121212] text-[#1f2937] dark:text-gray-300 font-sans overflow-hidden transition-colors duration-300">
      {/* Navbar Leitor */}
      <header className="h-16 flex-shrink-0 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md border-b border-gray-200 dark:border-zinc-800 px-6 flex justify-between items-center z-20 w-full relative">
        <Link to="/toc" className="text-gray-500 hover:text-rose-700 transition" aria-label="Índice">
          <List size={20} />
        </Link>
        <span className="text-[0.75rem] font-semibold text-gray-500 uppercase tracking-[0.1em] line-clamp-2 mx-4 text-center flex-1 leading-tight">
          {chapter.title}
        </span>
        <div className="flex space-x-4">
          <button
            onClick={toggleDarkMode}
            className="text-gray-500 hover:text-rose-700 transition"
            aria-label={darkMode ? "Ativar modo claro" : "Ativar modo escuro"}
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>
      </header>

      {/* Área de Leitura com Swipe Tracking */}
      <main 
        ref={scrollRef}
        className="flex-1 overflow-x-hidden relative overflow-y-auto"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <div className="px-6 md:px-16 py-12">
          <div className="max-w-[600px] mx-auto font-serif leading-[1.6] text-[1.15rem]">
            <h1 className="text-[2.25rem] font-bold mb-8 text-rose-700 dark:text-rose-400 leading-[1.2]">
              {chapter.title}
            </h1>
            {chapter.content}
          </div>
        </div>
      </main>

      {/* Rodapé de Navegação */}
      <footer className="h-16 flex-shrink-0 bg-white dark:bg-zinc-900 border-t border-gray-200 dark:border-zinc-800 px-6 flex items-center justify-center gap-10 w-full z-20 relative">
        <button
          disabled={currentChapterIndex === 0}
          onClick={goToPrev}
          className={`flex items-center gap-2 px-4 py-2 rounded-full font-semibold text-[0.9rem] transition ${
            currentChapterIndex === 0
              ? 'text-gray-400 dark:text-zinc-600 cursor-not-allowed'
              : 'text-rose-700 dark:text-rose-400 hover:bg-rose-50 dark:hover:bg-zinc-800'
          }`}
        >
          <ChevronLeft size={18} /> Anterior
        </button>
        <span className="text-[0.8rem] text-gray-500 hidden sm:inline-block">
          Capítulo {currentChapterIndex + 1} de {bookData.length}
        </span>
        <button
          disabled={currentChapterIndex === bookData.length - 1}
          onClick={goToNext}
          className={`flex items-center gap-2 px-4 py-2 rounded-full font-semibold text-[0.9rem] transition ${
            currentChapterIndex === bookData.length - 1
              ? 'text-gray-400 dark:text-zinc-600 cursor-not-allowed'
              : 'text-rose-700 dark:text-rose-400 hover:bg-rose-50 dark:hover:bg-zinc-800'
          }`}
        >
          Próximo <ChevronRight size={18} />
        </button>
      </footer>
    </div>
  );
}
