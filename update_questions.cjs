const fs = require('fs');

function processFile(file) {
  const contentLines = fs.readFileSync(file, 'utf8').split('\n');
  let newLines = [];
  
  for (let i = 0; i < contentLines.length; i++) {
    const prevLine = i > 0 ? contentLines[i - 1] : '';
    let currLine = contentLines[i];
    
    if (currLine.includes('<ReflectionInput ')) {
      // Look back a few lines to find a paragraph or span text
      let question = '';
      for (let j = 1; j <= 2; j++) {
         const pLine = i >= j ? contentLines[i - j] : '';
         const match = pLine.match(/>([^<]+)<\/(span|p)>/);
         if (match && match[1].trim()) {
           question = match[1].trim();
           break;
         }
      }
      
      // Clean up question
      if(question.startsWith('•')) {
        question = question.substring(1).trim();
      }
      if (question.match(/^\d+\.\s/)) {
         question = question.replace(/^\d+\.\s/, ''); // Remove leading "1. ", "2. ", etc
      }
      
      if (question && !currLine.includes('question=')) {
          // Add question attribute
          const escapedQuestion = question.replace(/"/g, '&quot;');
          currLine = currLine.replace('<ReflectionInput ', `<ReflectionInput question="${escapedQuestion}" `);
      }
    }
    
    newLines.push(currLine);
  }
  
  fs.writeFileSync(file, newLines.join('\n'));
}

processFile('src/data/bookDataPart1.tsx');
processFile('src/data/bookDataPart2.tsx');
