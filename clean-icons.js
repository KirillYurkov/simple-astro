import fs from 'fs';
import path from 'path';

// Путь к твоей папке с 1000 иконок
const iconsDir = path.resolve('src/assets/icons');

function processDirectory(dir) {
  const files = fs.readdirSync(dir);

  files.forEach((file) => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      // Если это папка (например, socials), идем вглубь
      processDirectory(filePath);
    } else if (file.endsWith('.svg')) {
      // Если это SVG файл, чистим его
      let content = fs.readFileSync(filePath, 'utf8');
      
      // Регулярка: находит fill="любой цвет" кроме fill="none" и fill="currentColor"
      // и заменяет цвет на currentColor
      const updatedContent = content.replace(/fill="(?!none|currentColor)[^"]+"/g, 'fill="currentColor"');

      if (content !== updatedContent) {
        fs.writeFileSync(filePath, updatedContent, 'utf8');
        console.log(`✅ Очищен цвет в: ${file}`);
      }
    }
  });
}

console.log('🚀 Запуск тотальной очистки 1000 иконок...');
processDirectory(iconsDir);
console.log('🎉 Все иконки готовы! Теперь они слушаются CSS.');
