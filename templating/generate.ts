import fs from 'fs';
import path from 'path';
import nunjucks from 'nunjucks';
import chalk from 'chalk';

// ===== Configuration =====
const INPUT_DIR = path.join(__dirname, 'input'); // Folder containing .md files
const OUTPUT_DIR = path.join(__dirname, 'output');   // Where to save .html files
const RENDER_CONTEXT = { /* Add global Nunjucks variables here */ };


const env = new nunjucks.Environment([
  new nunjucks.FileSystemLoader('components'),
  new nunjucks.FileSystemLoader('input'),
])




// ===== Process All .md Files =====
function processDirectory(currentDir) {
  const items = fs.readdirSync(currentDir);

  items.forEach(item => {
    const fullPath = path.join(currentDir, item);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      processDirectory(fullPath); // Recurse into subfolders
    } else if (path.extname(item) === '.md') {
      renderMarkdownFile(fullPath); // Process .md files
    }
  });
}

function prepareHTMLFilePath(inputHtmlFilePath) {
  return inputHtmlFilePath.replace('/home/dabomian/Dev/creoox/xeokit-docs/templating/input', '/xeokit/examples');
}

function renderMarkdownFile(inputMdFilePath) {
  // Read Markdown content
  const inputMdContent = fs.readFileSync(inputMdFilePath, 'utf8');

  // Add json content to RENDER_CONTEXT
  const inputJsonFilePath = inputMdFilePath.replace('.md', '.json')
  if (fs.existsSync(inputJsonFilePath)) {
    const inputJsonContent = fs.readFileSync(inputJsonFilePath, 'utf8');
    const inputJsonData = JSON.parse(inputJsonContent);
    RENDER_CONTEXT['jsonContent'] = inputJsonData;
  } else {
    console.warn(chalk.yellow(`⚠️ JSON file not found: ${inputJsonFilePath}`));
  }

  // Add html content to RENDER_CONTEXT
  const inputHtmlFilePath = inputMdFilePath.replace('.md', '.html')
  if (fs.existsSync(inputHtmlFilePath)) {
    const inputHtmlContent = fs.readFileSync(inputHtmlFilePath, 'utf8');
    console.log(prepareHTMLFilePath(inputHtmlFilePath))
    RENDER_CONTEXT['lifeExampleUrl'] = prepareHTMLFilePath(inputHtmlFilePath);
    RENDER_CONTEXT['srcCodeUrl'] = prepareHTMLFilePath(inputHtmlFilePath);
    RENDER_CONTEXT['htmlContent'] = inputHtmlContent;
  }
  else {
    console.warn(chalk.yellow(`⚠️ HTML file not found: ${inputHtmlFilePath}`));
  }

  // Render with Nunjucks
  const htmlContent = env.renderString(inputMdContent, RENDER_CONTEXT);

  // Calculate output path
  const relativePath = path.relative(INPUT_DIR, inputMdFilePath);
  const outputMdFilePath = path.join(
    OUTPUT_DIR,
    relativePath
  );

  // Ensure output directory exists
  fs.mkdirSync(path.dirname(outputMdFilePath), { recursive: true });

  // Save rendered HTML
  fs.writeFileSync(outputMdFilePath, htmlContent);
  console.log(chalk.green(`✅ Rendered: ${relativePath} → ${path.relative(OUTPUT_DIR, outputMdFilePath)}`));
}


processDirectory(INPUT_DIR);
