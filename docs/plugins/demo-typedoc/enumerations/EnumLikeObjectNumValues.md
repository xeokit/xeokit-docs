# Enumeration: EnumLikeObjectNumValues

Defined in: demo-typedoc/src/enums.ts:75

Since TypeScript's `enum` can be inconvenient to work with, some packages define their own enum-like objects:

```
export const EnumLikeObjectNumValues = {
    Pending: 1,
    InProgress: 2,
    Completed: 3
} as const
```

Use the `@enum` tag to make TypeDoc document this object as an enum.

## Enumeration Members

### Completed

> **Completed**: `3`

Defined in: demo-typedoc/src/enums.ts:81

***

### InProgress

> **InProgress**: `2`

Defined in: demo-typedoc/src/enums.ts:79

Indicates that a courier is en route delivering this order.

***

### Pending

> **Pending**: `1`

Defined in: demo-typedoc/src/enums.ts:76
