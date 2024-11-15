import fs from 'node:fs';
import path from 'node:path';
import axios from 'axios';
import sharp from 'sharp';

interface IconSizes {
  SMALL: number;
  MEDIUM: number;
  LARGE: number;
}

const ICON_SIZES: IconSizes = {
  SMALL: 32,
  MEDIUM: 48,
  LARGE: 96,
};

// Function to optimize image
async function optimizeImage(input: Buffer | string): Promise<Buffer> {
  return sharp(input)
    .resize(ICON_SIZES.MEDIUM, ICON_SIZES.MEDIUM)
    .png({
      quality: 80,
      compressionLevel: 9,
      palette: true,
      colors: 128,
    })
    .toBuffer();
}

async function main(): Promise<void> {
  const tokenIconsDir = path.join(process.cwd(), 'public', 'token-icons');

  // Create a cache-control file
  const cacheControlPath = path.join(tokenIconsDir, '_headers');
  fs.writeFileSync(
    cacheControlPath,
    `
/*
  Cache-Control: public, max-age=31536000, immutable
  Content-Type: image/png
`
  );

  // Process existing images
  const files = fs.readdirSync(tokenIconsDir).filter((f) => f.endsWith('.png'));

  for (const file of files) {
    const filepath = path.join(tokenIconsDir, file);
    try {
      const input = fs.readFileSync(filepath);
      const optimized = await optimizeImage(input);
      fs.writeFileSync(filepath, optimized);
    } catch (error) {
      console.error(`✗ Failed to optimize: ${file}`);
      console.error(error);
    }
  }
}

main().catch(console.error);
