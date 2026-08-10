import sharp from 'sharp';
import { readdirSync, statSync } from 'fs';
import { join, extname } from 'path';

const TARGET_DIR = join(import.meta.dirname, '..', 'public', 'images');
const MAX_WIDTH = 1600;

function walk(dir) {
  const files = [];
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) {
      files.push(...walk(full));
    } else {
      files.push(full);
    }
  }
  return files;
}

async function compress(file) {
  const ext = extname(file).toLowerCase();
  if (!['.jpg', '.jpeg', '.png'].includes(ext)) return null;

  const before = statSync(file).size;
  const image = sharp(file).rotate();
  const metadata = await image.metadata();

  const resized = metadata.width && metadata.width > MAX_WIDTH
    ? image.resize({ width: MAX_WIDTH })
    : image;

  const buffer = ext === '.png'
    ? await resized.png({ compressionLevel: 9, palette: true, quality: 82 }).toBuffer()
    : await resized.jpeg({ quality: 78, mozjpeg: true }).toBuffer();

  const after = buffer.length;
  if (after < before) {
    await sharp(buffer).toFile(file + '.tmp');
    const { renameSync } = await import('fs');
    renameSync(file + '.tmp', file);
  }
  return { file, before, after: Math.min(before, after) };
}

const files = walk(TARGET_DIR);
let totalBefore = 0;
let totalAfter = 0;

for (const file of files) {
  const result = await compress(file);
  if (!result) continue;
  totalBefore += result.before;
  totalAfter += result.after;
  console.log(
    `${result.file.replace(TARGET_DIR, '')}: ${(result.before / 1024 / 1024).toFixed(2)}MB -> ${(result.after / 1024 / 1024).toFixed(2)}MB`
  );
}

console.log(
  `\nTotal: ${(totalBefore / 1024 / 1024).toFixed(2)}MB -> ${(totalAfter / 1024 / 1024).toFixed(2)}MB (${(100 - (totalAfter / totalBefore) * 100).toFixed(1)}% reduction)`
);
