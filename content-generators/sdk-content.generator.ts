import chalk from "chalk";

import { ROOT_DIR } from "./shared/constants";
import { copyExamples } from "./sdk/copy-examples.js";
import { renderMarkdown } from "./sdk/render-markdown.js";

function generateSdkContent(rootDir: string = __dirname) {
  // copyExamples();
  renderMarkdown();
}

generateSdkContent(ROOT_DIR)
