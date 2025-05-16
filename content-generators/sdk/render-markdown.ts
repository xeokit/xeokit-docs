import { SDK_EXAMPLES_INPUT_DIR, SDK_EXAMPLES_OUTPUT_DIR } from '../shared/constants';
import chalk from 'chalk';
import { config } from '../shared/config';
import fs from 'fs';
import nunjucks from 'nunjucks';
import path from 'path';
import { processDirectoryRecursively } from '../shared/proces-dir-recursively';

type RenderContext = {
  jsonContent?: object;
  lifeExampleUrl?: string;
  srcCodeUrl?: string;
  srcContent?: string;
  [key: string]: unknown;
};

const RENDER_CONTEXT: RenderContext = { /* Add global Nunjucks variables here */ };

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

  // Add json content to RENDER_CONTEXT
  const inputJsonFilePath = path.join(SDK_EXAMPLES_INPUT_DIR, relativePath.replace('template.md', 'context.json'));
  if (fs.existsSync(inputJsonFilePath)) {
    const inputJsonContent = fs.readFileSync(inputJsonFilePath, 'utf8');
    const inputJsonData = JSON.parse(inputJsonContent);
    RENDER_CONTEXT['jsonContent'] = inputJsonData;
  } else {
    console.warn(chalk.yellow(`⚠️ JSON file not found: ${inputJsonFilePath}`));
  }

  // Add other fields to RENDER_CONTEXT
  const inputSrcFilePath = path.join(SDK_EXAMPLES_INPUT_DIR, relativePath.replace('template.md', 'main.ts'));
  if (fs.existsSync(inputSrcFilePath)) {
    const inputSrcContent = fs.readFileSync(inputSrcFilePath, 'utf8');
    const lifeExampleUrl = `${config.sdk.examplesHost}/src/${relativePath.replace('template.md', 'index.html')}`;

    RENDER_CONTEXT['lifeExampleUrl'] = lifeExampleUrl;
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
  console.log(chalk.blue('ⓘ renderMarkdown...'));
  const inputDir = SDK_EXAMPLES_INPUT_DIR;
  const outputDir = SDK_EXAMPLES_OUTPUT_DIR;

  if (fs.existsSync(outputDir)) {
    fs.rmSync(outputDir, { recursive: true, force: true });
  }

  processDirectoryRecursively(inputDir, (inputFilePath: string) => {
    _processFile(inputFilePath);
  })

}
