# Function: CardB()

> **CardB**(`__namedParameters`): `ReactElement`

Defined in: demo-typedoc/src/reactComponents.tsx:74

Renders a card around some content.

```tsx
<CardB variant="secondary">
    <h5>My Title</h5>
    <p>My content</p>
</CardB>
```

The props type is written directly in the function definition:

```
export function CardB({
    children,
    variant = "primary",
}: PropsWithChildren<{
    variant: "primary" | "secondary" | "success" | "danger" | "light" | "dark";
}>): ReactElement {
    // ...
}
```

This can make the TypeDoc documentation a bit cleaner for very simple components,
but it makes your code less readable.

## Parameters

### \_\_namedParameters

`PropsWithChildren`\<\{ `variant`: `"primary"` \| `"secondary"` \| `"success"` \| `"danger"` \| `"light"` \| `"dark"`; \}\>

## Returns

`ReactElement`
