import fs from 'fs';
import path from 'path';

export function processDirectoryRecursively(source: string, fileCallback: (filePath: string) => void) {
  const items = fs.readdirSync(source);
  items.forEach(item => {
    const fullPath = path.join(source, item);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      processDirectoryRecursively(fullPath, fileCallback); // Recurse into subfolders
    } else if (stat.isFile()) {
      fileCallback(fullPath); // Process file
    }});
}
