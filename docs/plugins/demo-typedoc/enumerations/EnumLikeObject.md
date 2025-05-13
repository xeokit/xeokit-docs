# Enumeration: EnumLikeObject

Defined in: demo-typedoc/src/enums.ts:51

Since TypeScript's `enum` can be inconvenient to work with, some packages define their own enum-like objects:

```
export const EnumLikeObject = {
    Pending: 'pending',
    InProgress: 'inProgress',
    Completed: 'completed'
} as const
```

Use the `@enum` tag to make TypeDoc document this object as an enum.

## Enumeration Members

### Completed

> **Completed**: `"completed"`

Defined in: demo-typedoc/src/enums.ts:57

***

### InProgress

> **InProgress**: `"inProgress"`

Defined in: demo-typedoc/src/enums.ts:55

Indicates that a courier is en route delivering this order.

***

### Pending

> **Pending**: `"pending"`

Defined in: demo-typedoc/src/enums.ts:52
