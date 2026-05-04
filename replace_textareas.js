const fs = require('fs');

function replaceFile(file) {
  let content = fs.readFileSync(file, 'utf8');
  let qCount = 1;
  const matchDiv = /<div className="w-full h-16 border-b border-gray-300 dark:border-zinc-700 mt-2 rounded bg-white\/50 dark:bg-zinc-900\/50"><\/div>/g;
  
  content = content.replace(matchDiv, () => {
    return `<ReflectionInput id="${file.includes('1') ? 'p1' : 'p2'}_div_q_${qCount++}" placeholder="Escreva sua reflexão aqui..." />`;
  });

  const matchTextarea = /<textarea className="w-full h-24 border border-rose-200 dark:border-zinc-700 mt-2 p-3 rounded-lg bg-white\/80 dark:bg-zinc-900\/80 text-gray-800 dark:text-gray-200 resize-none focus:outline-none focus:ring-2 focus:ring-rose-500\/50 transition shadow-sm text-\[0\.95rem\] font-sans placeholder:text-\[#a1a1aa\] dark:placeholder:text-\[#52525b\]".*?><\/textarea>/g;
  content = content.replace(matchTextarea, () => {
      return `<ReflectionInput id="${file.includes('1') ? 'p1' : 'p2'}_txt_q_${qCount++}" placeholder="Escreva sua reflexão aqui..." />`;
  });

  fs.writeFileSync(file, content);
}

replaceFile('src/data/bookDataPart1.tsx');
replaceFile('src/data/bookDataPart2.tsx');
