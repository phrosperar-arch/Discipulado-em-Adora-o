import React, { useState } from 'react';
import { BookOpen, List } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

export function Home() {
  const navigate = useNavigate();
  const [boyImgError, setBoyImgError] = useState(false);

  return (
    <div className="relative min-h-screen w-full overflow-hidden flex flex-col items-center justify-center bg-[#fdfbfb] transition-colors duration-500 font-sans">
      
      {/* Imagem de Fundo (Luzes Ofuscadas) - Cobre toda a tela */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-80"
        style={{ backgroundImage: "url('/bg-lights.png')" }}
      ></div>

      {/* Gradientes Fallback */}
      <div 
        className="absolute inset-0 z-0 opacity-40 mix-blend-multiply"
        style={{
          background: 'radial-gradient(circle at 70% 30%, #eff6fa 0%, transparent 50%), radial-gradient(circle at 20% 80%, #f4dbe2 0%, #fefcfb 60%)',
        }}
      ></div>

      {/* Overlay sutil para garantir leitura do texto sem ofuscar demais o fundo */}
      <div className="absolute inset-0 z-0 bg-white/40 md:bg-gradient-to-r md:from-white/70 md:via-white/30 md:to-transparent"></div>

      <div className="container mx-auto px-6 max-w-6xl relative z-10 flex flex-col md:flex-row items-center justify-between min-h-screen pt-12 md:pt-0">
        
        {/* Bloco de Texto (Esquerda) */}
        <div className="flex-1 w-full text-center md:text-left flex flex-col items-center md:items-start z-20">
          <h1 className="flex flex-col mb-4 w-full">
            <span className="text-[1.8rem] min-[380px]:text-[2.2rem] sm:text-[2.8rem] md:text-[3rem] font-sans font-bold leading-none tracking-tight text-[#499bc4]">
              Discipulado em
            </span>
            <span className="text-[3rem] min-[380px]:text-[3.8rem] sm:text-[4.8rem] md:text-[5.5rem] lg:text-[6.5rem] font-serif font-normal leading-tight tracking-tight mt-[-0.2rem] mb-2 text-[#c12757]">
              Adoração
            </span>
          </h1>
          
          <p className="mb-10 text-[1rem] sm:text-[1.1rem] md:text-[1.2rem] leading-relaxed max-w-[95%] md:max-w-md font-bold text-[#8c7b80] md:pr-4">
            Como pensar, sentir e viver pela e para a glória de Deus revelada no evangelho de Cristo.
          </p>
          
          <h2 className="font-sans tracking-[0.2em] uppercase mb-10 text-sm sm:text-base text-[#8c7b80]">
            Marcio Gonçalves
          </h2>
          
          <div className="space-y-3 w-full max-w-sm px-2 md:px-0">
            <button 
              onClick={() => navigate('/reader/0')}
              className="w-full flex items-center justify-center text-white py-3.5 md:py-4 rounded-full font-bold shadow-lg shadow-[#c12757]/30 hover:shadow-[#c12757]/50 hover:-translate-y-1 transition-all duration-300 tracking-wide text-[0.95rem] md:text-[1rem] bg-[#c12757]"
            >
              <BookOpen className="mr-2" size={18}/> Começar Leitura
            </button>
            
            <Link 
              to="/toc"
              className="w-full flex items-center justify-center bg-white/80 backdrop-blur-sm border py-3.5 md:py-4 rounded-full font-bold hover:bg-white hover:-translate-y-1 transition-all duration-300 tracking-wide text-[0.95rem] md:text-[1rem] shadow-sm"
              style={{ color: '#c12757', borderColor: 'rgba(193, 39, 87, 0.2)' }}
            >
              <List className="mr-2" size={18}/> Índice de Capítulos
            </Link>
          </div>
        </div>

        {/* Bloco da Imagem (Direita) */}
        {!boyImgError ? (
          <div className="flex-1 w-full mt-8 md:mt-0 flex justify-center md:justify-end items-end h-[45vh] sm:h-[50vh] md:h-screen relative z-10 pointer-events-none">
            <img 
              src="/boy.png" 
              alt="Menino orando" 
              onError={() => setBoyImgError(true)}
              className="h-full w-auto object-contain object-bottom max-h-[400px] sm:max-h-[500px] md:max-h-[85vh] lg:max-h-[95vh] animate-in fade-in duration-1000"
            />
          </div>
        ) : (
          <div className="flex-1 h-20 md:h-screen"></div> // Espaçador caso falte a imagem
        )}

      </div>
    </div>
  );
}
