# Interface: EasyFormDialogProps

Defined in: demo-typedoc/src/reactComponents.tsx:85

The props type of [\`EasyFormDialog\`](../functions/EasyFormDialog.md).

## Properties

### cancelButtonText?

> `optional` **cancelButtonText**: `string`

Defined in: demo-typedoc/src/reactComponents.tsx:96

The text of the cancel button. Defaults to "Cancel".

***

### closeRef?

> `optional` **closeRef**: `MutableRefObject`\<() => `void`\>

Defined in: demo-typedoc/src/reactComponents.tsx:177

This prop accepts a ref object that holds a function of type `() =>
void`. You can execute the function to programmatically close the dialog:

```
closeRef.current()
```

***

### focusFirst?

> `optional` **focusFirst**: `boolean`

Defined in: demo-typedoc/src/reactComponents.tsx:186

Set to `false` to disable the default behavior of focusing the first
input.

***

### formIsValid

> **formIsValid**: `boolean`

Defined in: demo-typedoc/src/reactComponents.tsx:108

A boolean indicating if the form is valid.

***

### modalClass?

> `optional` **modalClass**: `string`

Defined in: demo-typedoc/src/reactComponents.tsx:180

The CSS class added to the underlying Bootstrap modal.

***

### showFooter?

> `optional` **showFooter**: `boolean`

Defined in: demo-typedoc/src/reactComponents.tsx:192

Set to `false` to hide the modal footer, which contains the submit and
cancel buttons.

***

### showValidation

> **showValidation**: `boolean`

Defined in: demo-typedoc/src/reactComponents.tsx:111

A boolean indicating if validation feedback is being shown.

***

### submitButtonClass?

> `optional` **submitButtonClass**: `string`

Defined in: demo-typedoc/src/reactComponents.tsx:93

The CSS class of the submit button.

***

### submitButtonText

> **submitButtonText**: `string`

Defined in: demo-typedoc/src/reactComponents.tsx:90

The text of the submit button.

***

### submitEnabled?

> `optional` **submitEnabled**: `boolean`

Defined in: demo-typedoc/src/reactComponents.tsx:105

Allows you to disable the submit button even if `getSubmitEnabled()`
would return true.

This can be useful if you want to disable the submit button while a query
is in progress.

***

### title

> **title**: `ReactNode`

Defined in: demo-typedoc/src/reactComponents.tsx:87

The title of the dialog. Can be a JSX element.

## Methods

### onCancel()?

> `optional` **onCancel**(): `void`

Defined in: demo-typedoc/src/reactComponents.tsx:167

An uncommonly-used callback that fires when the user clicks the cancel button.

#### Returns

`void`

***

### onClose()

> **onClose**(): `void`

Defined in: demo-typedoc/src/reactComponents.tsx:134

A callback that fires when the dialog has completely closed. Your
`onClose` callback should update call, for example,
`setDialogVisible(false)` so that the `EasyFormDialog` is no longer
rendered.

#### Returns

`void`

***

### onShowValidationChange()

> **onShowValidationChange**(`showValidation`): `void`

Defined in: demo-typedoc/src/reactComponents.tsx:114

A callback that fires when the dialog is submitted.

#### Parameters

##### showValidation

`boolean`

#### Returns

`void`

***

### onSubmit()

> **onSubmit**(`formData`): `Promise`\<`void`\> \| `Promise`\<`undefined` \| \{ `responseData`: `unknown`; `shouldClose`: `boolean`; \}\>

Defined in: demo-typedoc/src/reactComponents.tsx:154

A callback that fires when the form is submitted. You will typically
perform an API call in your `submit` function.

Your `submit` function can optionally return an object in the shape

```
{
    shouldClose?: boolean
    responseData: unknown
}
```

Using `formData` is deprecated. Use controlled components instead.

`formData` will be `{}` if the optional peer dependency `jquery` is not
installed.

#### Parameters

##### formData

`Record`\<`string`, `string` \| `boolean`\>

#### Returns

`Promise`\<`void`\> \| `Promise`\<`undefined` \| \{ `responseData`: `unknown`; `shouldClose`: `boolean`; \}\>

***

### onSuccess()

> **onSuccess**(`payload`): `Promise`\<`void`\>

Defined in: demo-typedoc/src/reactComponents.tsx:126

A callback that fires after the `submit` function succeeds.

If the `submit` function returned `responseData`, it is passed to your
`onSuccess` function.

Your `onSuccess` callback must return a promise. The submit button will
continue showing a loading indicator until the promise resolves. This is
to support refetching the data that was updated by the form submission.

#### Parameters

##### payload

`unknown`

#### Returns

`Promise`\<`void`\>
