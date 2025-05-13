# Function: sqrtArrowFunction()

> **sqrtArrowFunction**(`x`): `number`

Defined in: demo-typedoc/src/functions.ts:25

Calculates the square root of a number.

`sqrtArrowFunction` is defined using a variable declaration:

```
export const sqrtArrowFunction = (x: number): number => Math.sqrt(x);
```

TypeDoc is smart and documents `sqrtArrowFunction` as a function rather than a variable.

## Parameters

### x

`number`

the number do calculate the root of.

## Returns

`number`

the square root if `x` is non-negative or `NaN` if `x` is negative.
