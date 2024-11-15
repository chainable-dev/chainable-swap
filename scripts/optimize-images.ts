import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const inputDir = path.join(__dirname, '../public/token-icons');
const outputDir = path.join(__dirname, '../public/token-icons-optimized');

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir);
}

fs.readdirSync(inputDir).forEach(file => {
  const inputFile = path.join(inputDir, file);
  const outputFile = path.join(outputDir, file);

  sharp(inputFile)
    .resize(64, 64) // Resize to 64x64 pixels
    .toFormat('png', { quality: 80 }) // Convert to PNG with 80% quality
    .toFile(outputFile)
    .then(() => console.log(`Optimized: ${file}`))
    .catch(err => console.error(`Error optimizing ${file}:`, err));
}); 