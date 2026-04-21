import React from 'react';

interface VerseQuoteProps {
  text: string;
  refText: string;
}

export function VerseQuote({ text, refText }: VerseQuoteProps) {
  return (
    <div className="my-8 px-6 py-5 bg-rose-50 dark:bg-zinc-800 border-l-4 border-rose-700 dark:border-rose-400 rounded-r-lg italic text-[#374151] dark:text-gray-300 font-serif">
      <p>"{text}"</p>
      <p className="block text-right font-bold mt-3 text-rose-700 dark:text-rose-400 font-sans text-[0.85rem] not-italic">{refText}</p>
    </div>
  );
}
