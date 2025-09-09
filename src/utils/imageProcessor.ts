import sharp from 'sharp';
import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const fullDir = path.join(root, 'assets', 'full');
const thumbDir = path.join(root, 'assets', 'thumb');

export async function processImage(
  filename: string,
  width: number,
  height: number
): Promise<string> {
  if (!fs.existsSync(thumbDir)) fs.mkdirSync(thumbDir, { recursive: true });

  const exts = ['jpg', 'jpeg', 'png'];
  let inputPath = '';
  for (const ext of exts) {
    const p = path.join(fullDir, `${filename}.${ext}`);
    if (fs.existsSync(p)) {
      inputPath = p;
      break;
    }
  }

  if (!inputPath) {
    const err = new Error(
      `Input file not found: ${path.join(fullDir, filename)}.[${exts.join(',')}]`
    ) as NodeJS.ErrnoException;
    err.code = 'ENOIMG';
    throw err;
  }

  const outputPath = path.join(thumbDir, `${filename}_${width}x${height}.jpg`);
  if (fs.existsSync(outputPath)) return outputPath;

  await sharp(inputPath).resize(width, height).toFile(outputPath);

  return outputPath;
}
