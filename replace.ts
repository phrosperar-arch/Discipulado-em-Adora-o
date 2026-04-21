import fs from 'fs';

function replaceInFile(filename: string) {
  let content = fs.readFileSync(filename, 'utf8');
  content = content.replace(
    /<div className="w-full h-16 border-b border-(?:gray|rose)-300(?:\/50)? mt-2 rounded bg-white\/50 dark:bg-zinc-900\/50"><\/div>/g,
    '<textarea className="w-full h-24 border border-rose-200 dark:border-zinc-700 mt-2 p-3 rounded-lg bg-white/80 dark:bg-zinc-900/80 text-gray-800 dark:text-gray-200 resize-none focus:outline-none focus:ring-2 focus:ring-rose-500/50 transition shadow-sm text-[0.95rem] font-sans placeholder:text-[#a1a1aa] dark:placeholder:text-[#52525b]" placeholder="Escreva sua reflexão aqui..."></textarea>'
  );
  fs.writeFileSync(filename, content);
}

replaceInFile('src/data/bookDataPart1.tsx');
replaceInFile('src/data/bookDataPart2.tsx');
console.log('Done replacing placeholders with textareas.');
