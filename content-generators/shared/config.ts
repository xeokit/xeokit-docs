import { type } from 'arktype'

// Components
const Sdk = type({
  examplesHost: 'string.url',
})

// Composition
const Config = type({
  sdk: Sdk,
})

// Validation
export const config: typeof Config.infer = (() => {
  const config = Config ({
    sdk: {
      examplesHost: process.env.DOC_SDK_EXAMPLES_HOST,
    },
  })

  if (config instanceof type.errors ) {
    throw Error(config.summary)
  }
  return config
})()







