import path from 'path';
import fs from 'fs';
import nunjucks from 'nunjucks';
import chalk from 'chalk';
import { processDirectoryRecursively } from '../shared/proces-dir-recursively.js';
import { SDK_EXAMPLES_INPUT_DIR, SDK_EXAMPLES_OUTPUT_DIR } from '../shared/constants.js';


const RENDER_CONTEXT = { /* Add global Nunjucks variables here */ };

const env = new nunjucks.Environment([
  new nunjucks.FileSystemLoader('templates'),
])



function _processFile(inputFilePath: string) {
  // if not .md file, return
  if (path.extname(inputFilePath) !== '.md') {
    return;
  }

  const relativePath = path.relative(SDK_EXAMPLES_INPUT_DIR, inputFilePath);
  // calculate output file path and create output directory
  const outputFilePath = path.join(SDK_EXAMPLES_OUTPUT_DIR, relativePath.replace('template.md', 'content.md'));
  const outputDir = path.dirname(outputFilePath);
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }
  console.log(chalk.yellow(`Processing file: ${relativePath}`));

  // Add json content to RENDER_CONTEXT
  const inputJsonFilePath = path.join(SDK_EXAMPLES_INPUT_DIR, relativePath.replace('template.md', 'context.json'));
  if (fs.existsSync(inputJsonFilePath)) {
    const inputJsonContent = fs.readFileSync(inputJsonFilePath, 'utf8');
    const inputJsonData = JSON.parse(inputJsonContent);
    RENDER_CONTEXT['jsonContent'] = inputJsonData;
  } else {
    console.warn(chalk.yellow(`⚠️ JSON file not found: ${inputJsonFilePath}`));
  }

  // Add src content to RENDER_CONTEXT
  const inputSrcFilePath = path.join(SDK_EXAMPLES_INPUT_DIR, relativePath.replace('template.md', 'main.ts'));
  if (fs.existsSync(inputSrcFilePath)) {
    const inputSrcContent = fs.readFileSync(inputSrcFilePath, 'utf8');
    RENDER_CONTEXT['lifeExampleUrl'] = inputSrcFilePath;
    RENDER_CONTEXT['srcCodeUrl'] = inputSrcFilePath;
    RENDER_CONTEXT['srcContent'] = inputSrcContent;
  }
  else {
    console.warn(chalk.yellow(`⚠️ HTML file not found: ${inputSrcFilePath}`));
  }

  // Render with Nunjucks
  const inputFileContent = fs.readFileSync(inputFilePath, 'utf8');
  const docsContent = env.renderString(inputFileContent, RENDER_CONTEXT);

  // // Write output file
  fs.writeFileSync(outputFilePath, docsContent, 'utf8');
}

export function renderMarkdown() {
  const inputDir = SDK_EXAMPLES_INPUT_DIR;
  const outputDir = SDK_EXAMPLES_OUTPUT_DIR;

  if (fs.existsSync(outputDir)) {
    fs.rmSync(outputDir, { recursive: true, force: true });
  }

  processDirectoryRecursively(inputDir, (inputFilePath: string) => {
    _processFile(inputFilePath);
  })

}
