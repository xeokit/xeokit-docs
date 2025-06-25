import path from 'path'

export const DIRNAME = __dirname
export const ROOT_DIR = path.resolve(__dirname, '..', '..')

// SDK v3 examples
const SDK_V3_FOLDER = 'sdk-v3'
export const SDK_EXAMPLES_DIR = path.join(ROOT_DIR, '_submodules', 'sdk', 'packages', 'examples', 'src')
export const SDK_EXAMPLES_INPUT_DIR = path.join(ROOT_DIR, 'content-generators', SDK_V3_FOLDER, 'inputs')
export const SDK_EXAMPLES_OUTPUT_DIR = path.join(ROOT_DIR, 'content-generators', SDK_V3_FOLDER, 'outputs')
export const SDK_EXAMPLES_CONTENT_DIR = path.join(ROOT_DIR, 'docs', SDK_V3_FOLDER, 'examples')
