import { copyContent } from "./sdk-v3/copy-content";
import { copyExamples } from "./sdk-v3/copy-examples";
import { renderMarkdown } from "./sdk-v3/render-markdown";

function generateSdkContent() {
  copyExamples();
  renderMarkdown();
  copyContent();
}

generateSdkContent()
