
export const docSdkExamplesHost = process.env.DOC_SDK_EXAMPLES_HOST;

if (!docSdkExamplesHost) {
  throw new Error('DOC_SDK_EXAMPLES_HOST is not defined');
} else {
  console.log(`DOC_SDK_EXAMPLES_HOST: ${docSdkExamplesHost}`);
}

