import fs from 'fs';
import path from 'path';

const imgPath = path.resolve('./public/boy.png');
const imgData = fs.readFileSync(imgPath);
const base64Image = imgData.toString('base64');

const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
  <rect width="512" height="512" fill="#fdfaf9"/>
  <image href="data:image/png;base64,${base64Image}" x="16" y="64" width="480" height="480" preserveAspectRatio="xMidYMax meet"/>
</svg>`;

fs.writeFileSync('./public/app-icon.svg', svgContent);
console.log('Successfully created public/app-icon.svg');
