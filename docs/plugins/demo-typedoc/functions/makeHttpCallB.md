# Function: makeHttpCallB()

> **makeHttpCallB**(`options`): `Promise`\<`Response`\>

Defined in: demo-typedoc/src/functions.ts:78

A function that takes in an options object and makes an HTTP call.

The options type is written directly in the function definition.

## Parameters

### options

#### body

`string` \| `Blob` \| `FormData`

#### headers

`Record`\<`string`, `string`\>

e.g. `{ 'Authorization': 'Bearer <access token>' }`

#### method

`string`

e.g. GET, POST, PUT, DELETE

#### mode

`"cors"` \| `"no-cors"` \| `"same-origin"`

#### url

`string`

## Returns

`Promise`\<`Response`\>
