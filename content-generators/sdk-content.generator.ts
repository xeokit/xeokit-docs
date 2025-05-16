import { copyContent } from "./sdk/copy-content";
import { copyExamples } from "./sdk/copy-examples";
import { renderMarkdown } from "./sdk/render-markdown";

function generateSdkContent() {
  copyExamples();
  renderMarkdown();
  copyContent();
}

generateSdkContent()
