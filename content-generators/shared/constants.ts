import path from 'path'

export const DIRNAME = __dirname
export const ROOT_DIR = path.resolve(__dirname, '..', '..')

// SDK

export const SDK_EXAMPLES_DIR = path.join(ROOT_DIR, '_submodules', 'sdk', 'packages', 'examples', 'src')
export const SDK_EXAMPLES_INPUT_DIR = path.join(ROOT_DIR, 'content-generators', 'sdk', 'inputs')
export const SDK_EXAMPLES_OUTPUT_DIR = path.join(ROOT_DIR, 'content-generators', 'sdk', 'outputs')
