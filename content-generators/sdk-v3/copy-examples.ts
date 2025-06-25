import { SDK_EXAMPLES_DIR, SDK_EXAMPLES_INPUT_DIR } from '../shared/constants.js';
import chalk from 'chalk';
import fs from 'fs';
import path from 'path';

export function copyExamples() {
  console.log(chalk.blue('ⓘ copyExamples...'));
  const examplesDir = SDK_EXAMPLES_DIR;
  const inputDir = SDK_EXAMPLES_INPUT_DIR;

  if (fs.existsSync(inputDir)) {
    fs.rmSync(inputDir, { recursive: true, force: true });
  }
  fs.mkdirSync(inputDir, { recursive: true });

  fs.cpSync(examplesDir, inputDir, {
    recursive: true,
    filter: (src) => {
      // if is directory, copy it
      if (fs.statSync(src).isDirectory()) {
        return true;
      }
      //  if it is file in parent directory, omit it
      if (path.dirname(src) === examplesDir) {
        return false;
      }
      // if is ts or md file, copy it
      if (path.extname(src) === '.ts' || path.extname(src) === '.md' || path.extname(src) === '.json') {
        return true;
      }
      return false;
    }
  })
}
