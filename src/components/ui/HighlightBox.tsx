import React from 'react';
import { Target } from 'lucide-react';

interface HighlightBoxProps {
  title: string;
  children: React.ReactNode;
}

export function HighlightBox({ title, children }: HighlightBoxProps) {
  return (
    <div className="mt-10 mb-8 bg-[#f3f4f6] dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 rounded-xl p-6 relative font-sans text-left">
      <div className="absolute -top-3 left-5 bg-rose-700 dark:bg-rose-600 text-white px-3 py-1 rounded-full text-[0.7rem] font-bold uppercase tracking-wide flex items-center gap-1 shadow-sm">
        <Target size={12} /> Destaque
      </div>
      <h4 className="font-bold mb-3 block text-[0.95rem] text-[#1f2937] dark:text-gray-100">{title}</h4>
      <div className="text-[#374151] dark:text-gray-300 text-[0.95rem]">{children}</div>
    </div>
  );
}
