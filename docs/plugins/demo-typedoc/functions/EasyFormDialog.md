# Function: EasyFormDialog()

> **EasyFormDialog**(`props`): `ReactElement`

Defined in: demo-typedoc/src/reactComponents.tsx:254

An example of a complex React component.

A wrapper around `ActionDialog` that removes a lot of the boilerplate needed
for dialogs that contain a form.

```tsx
interface ExampleProps {
    onSuccess(responseData: number): Promise<void>
    onClose(): void
}

export function Example({
    onSuccess,
    onClose,
}: ExampleProps): ReactElement {
    const { onChildValidChange, allFieldsValid } = useFieldValidity()
    const [showValidation, setShowValidation] = useState(false)
    const vProps = { showValidation, onValidChange: onChildValidChange }

    const [myNumber, setMyNumber] = useState('')

    async function submit() {
        await api.product.performOperation()

        return {
            responseData: parseInt(myNumber),
        }
    }

    return (
        <EasyFormDialog
            title="Enter a Number"
            submitButtonText="Submit"
            formIsValid={allFieldsValid}
            showValidation={showValidation}
            onShowValidationChange={setShowValidation}
            onSubmit={submit}
            onSuccess={onSuccess}
            onClose={onClose}
        >
            <FormGroup label="My number">
                {(id) => (
                    <ValidatedInput
                        id={id}
                        name="myNumber"
                        validators={[Validators.required(), Validators.integer()]}
                        value={myNumber}
                        onChange={setMyNumber}
                        {...vProps}
                    />
                )}
            </FormGroup>
        </EasyFormDialog>
    )
}
```

## Parameters

### props

`PropsWithChildren`\<[`EasyFormDialogProps`](../interfaces/EasyFormDialogProps.md)\>

## Returns

`ReactElement`
