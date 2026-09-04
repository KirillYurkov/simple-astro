"use strict";
import fs from "fs";
import path from "path";
import ttf2woff2 from "ttf2woff2";

const fontDir = "./src/fonts";

// Проверяем, существует ли папка
if (!fs.existsSync(fontDir)) {
  console.error(`Папка ${fontDir} не найдена!`);
  process.exit(1);
}

// Читаем все файлы в папке
fs.readdirSync(fontDir).forEach((file) => {
  if (path.extname(file).toLowerCase() === ".ttf") {
    const inputPath = path.join(fontDir, file);
    const outputPath = path.join(fontDir, file.replace(/\.ttf$/i, ".woff2"));

    // Читаем и конвертируем
    const input = fs.readFileSync(inputPath);
    fs.writeFileSync(outputPath, ttf2woff2(input));

    // Удаляем исходный .ttf файл
    fs.unlinkSync(inputPath);

    console.log(
      `✓ Сконвертирован и очищен: ${file} -> ${path.basename(outputPath)}`,
    );
  }
});
