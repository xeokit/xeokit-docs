import path from 'path';
import fs from 'fs';
import chalk from 'chalk';
import { SDK_EXAMPLES_CONTENT_DIR, SDK_EXAMPLES_OUTPUT_DIR } from '../shared/constants.js';
import { processDirectoryRecursively } from '../shared/proces-dir-recursively.js';

function _copyFile(inputFilePath: string) {
  // want copy content.md into example one level down
  const parentPath = path.dirname(inputFilePath);
  const parentDirName = path.basename(parentPath);
  const grandParentPath = path.dirname(parentPath);
  const relativeDirPath = path.relative(SDK_EXAMPLES_OUTPUT_DIR, grandParentPath);
  const contentDirPath = path.join(SDK_EXAMPLES_CONTENT_DIR, relativeDirPath);

  if (!fs.existsSync(contentDirPath)) {
    fs.mkdirSync(contentDirPath, { recursive: true });
  }

  // want to copy content.md with folder name
  const contentFilePath = path.join(contentDirPath, parentDirName + '.md');
  fs.copyFileSync(inputFilePath, contentFilePath);
}

export function copyContent() {
  console.log(chalk.blue('ⓘ copyContent...'));
  const outputDir = SDK_EXAMPLES_OUTPUT_DIR;
  const contentDir = SDK_EXAMPLES_CONTENT_DIR;

  if (fs.existsSync(contentDir)) {
    fs.rmSync(contentDir, { recursive: true, force: true });
  }
  fs.mkdirSync(contentDir, { recursive: true });

  processDirectoryRecursively(outputDir, (inputFilePath: string) => {
    _copyFile(inputFilePath);
  })
}
