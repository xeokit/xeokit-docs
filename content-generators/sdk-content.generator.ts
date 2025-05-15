import chalk from "chalk";

import { ROOT_DIR } from "./shared/constants";
import { copyContent } from "./sdk/copy-content.js";
import { copyExamples } from "./sdk/copy-examples.js";
import { renderMarkdown } from "./sdk/render-markdown.js";

function generateSdkContent(rootDir: string = __dirname) {
  copyExamples();
  renderMarkdown();
  copyContent();
}

generateSdkContent(ROOT_DIR)
