"use strict";
import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const imageDir = './src/images'; // Главная папка с картинками
const extensions = ['.jpg', '.jpeg', '.png'];

// Рекурсивная функция для обхода всех папок и подпапок
async function processDirectory(dirPath) {
  if (!fs.existsSync(dirPath)) {
    console.error(`Папка ${dirPath} не найдена!`);
    return;
  }

  const files = fs.readdirSync(dirPath);

  for (const file of files) {
    const fullPath = path.join(dirPath, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      // Если это папка — заходим внутрь неё (рекурсия)
      await processDirectory(fullPath);
    } else {
      // Если это файл — проверяем расширение
      const ext = path.extname(file).toLowerCase();
      if (extensions.includes(ext)) {
        const outputPath = path.join(dirPath, file.replace(ext, '.webp'));

        try {
          // Конвертируем в webp
          await sharp(fullPath)
            .webp({ quality: 80 }) // 80 — оптимальный баланс веса и качества
            .toFile(outputPath);

          // Удаляем старый файл (JPEG/PNG)
          fs.unlinkSync(fullPath);
          
          // Показываем красивый относительный путь в консоли
          const relativePath = path.relative(imageDir, fullPath);
          console.log(`✓ Сконвертировано: ${relativePath} -> .webp`);
        } catch (err) {
          console.error(`Ошибка при обработке файла ${file}:`, err);
        }
      }
    }
  }
}

// Запускаем процесс для главной папки
console.log('Начало конвертации изображений...');
processDirectory(imageDir).then(() => {
  console.log('Отлично! Все изображения оптимизированы.');
});

