// download-image.js
import * as fs from 'node:fs';
import * as path from 'node:path';

export async function downloadImage(url, destPath) {
  if (fs.existsSync(destPath)) {
    return true;
  }

  const dir = path.dirname(destPath);
  fs.mkdirSync(dir, { recursive: true });

  const res = await fetch(url, {
    headers: {
      // Это критически важно: без UA Nginx на Спринтхосте часто режет картинки
      'User-Agent': 'Mozilla/5.0 (compatible; AstroBuildBot/1.0)',
      'Accept': 'image/*,*/*',
    },
    // Увеличим таймаут, чтобы не отвалиться на медленных ответах
    signal: AbortSignal.timeout(15000),
  });

  if (!res.ok) {
    throw new Error(`HTTP ${res.status} for ${url}`);
  }

  const buffer = await res.arrayBuffer();
  fs.writeFileSync(destPath, Buffer.from(buffer));
  return true;
}
