import React from 'react';
import { ArrowLeft, Mail, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Contact() {
  return (
    <div className="min-h-screen bg-[#fdfaf9] dark:bg-zinc-950 p-6 flex flex-col items-center justify-center font-sans">
      <div className="max-w-md w-full">
        <Link to="/" className="mb-6 p-2 -ml-2 text-gray-500 hover:text-rose-700 flex items-center inline-block text-[0.9rem] font-semibold transition" aria-label="Voltar">
          <ArrowLeft size={18} className="mr-1"/> Voltar
        </Link>
        <h2 className="text-[2rem] font-serif font-bold text-[#1f2937] dark:text-white mb-4">Contatos</h2>
        <p className="text-[#6b7280] dark:text-gray-400 mb-8 text-[0.95rem] leading-relaxed">
          Deseja entender mais sobre o evangelho, convidar para ministrações ou adquirir materiais? Fale conosco:
        </p>
        
        <div className="space-y-3">
          <a 
            href="mailto:escoladeministeriosmg@gmail.com" 
            className="flex items-center p-4 rounded-xl bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 hover:border-rose-300 dark:hover:border-rose-700 transition group shadow-sm"
          >
            <Mail className="text-rose-700 dark:text-rose-400 mr-4 shrink-0" size={22} />
            <div>
              <p className="font-bold text-[0.95rem] text-[#1f2937] dark:text-white">E-mail</p>
              <p className="text-[0.85rem] text-[#6b7280] group-hover:text-rose-700 dark:group-hover:text-rose-400 transition break-all">escoladeministeriosmg@gmail.com</p>
            </div>
          </a>
          
          <a 
            href="https://instagram.com/escoladeministeriosmarciogoncalves" 
            target="_blank" 
            rel="noreferrer" 
            className="flex items-center p-4 rounded-xl bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 hover:border-rose-300 dark:hover:border-rose-700 transition group shadow-sm"
          >
            <Instagram className="text-rose-700 dark:text-rose-400 mr-4 shrink-0" size={22} />
            <div>
              <p className="font-bold text-[0.95rem] text-[#1f2937] dark:text-white">Instagram</p>
              <p className="text-[0.85rem] text-[#6b7280] group-hover:text-rose-700 dark:group-hover:text-rose-400 transition">@escoladeministeriosmarciogoncalves</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
