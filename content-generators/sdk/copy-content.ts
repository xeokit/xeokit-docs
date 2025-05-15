import path from 'path';
import fs from 'fs';
import { SDK_EXAMPLES_CONTENT_DIR, SDK_EXAMPLES_OUTPUT_DIR } from '../shared/constants.js';
import { processDirectoryRecursively } from '../shared/proces-dir-recursively.js';




function _copyFile(inputFilePath: string) {
  console.log(path.dirname(inputFilePath));

}

export function copyContent() {
  const outputDir = SDK_EXAMPLES_OUTPUT_DIR;
  const contentDir = SDK_EXAMPLES_CONTENT_DIR;

  if (fs.existsSync(contentDir)) {
    fs.rmSync(contentDir, { recursive: true, force: true });
  }
  fs.mkdirSync(contentDir, { recursive: true });


  console.log(`Copying content from ${SDK_EXAMPLES_OUTPUT_DIR} to ${contentDir}`);
  processDirectoryRecursively(outputDir, (inputFilePath: string) => {
    _copyFile(inputFilePath);
  })

  // const examplesDir = SDK_EXAMPLES_DIR;
  // const inputDir = SDK_EXAMPLES_INPUT_DIR;

  // if (fs.existsSync(inputDir)) {
  //   fs.rmSync(inputDir, { recursive: true, force: true });
  // }
  // fs.mkdirSync(inputDir, { recursive: true });

  // fs.cpSync(examplesDir, inputDir, {
  //   recursive: true,
  //   filter: (src, dest) => {
  //     // if is directory, copy it
  //     if (fs.statSync(src).isDirectory()) {
  //       return true;
  //     }
  //     //  if it is file in parent directory, omit it
  //     if (path.dirname(src) === examplesDir) {
  //       return false;
  //     }
  //     // if is ts or md file, copy it
  //     if (path.extname(src) === '.ts' || path.extname(src) === '.md' || path.extname(src) === '.json') {
  //       return true;
  //     }
  //   }
  // })
}
