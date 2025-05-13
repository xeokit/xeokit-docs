# The TypeDoc Example

Welcome to the TypeDoc example! TypeDoc is a documentation generator for
TypeScript.

TypeDoc automatically documents every variable, function, and class
that is exported by your project. You can add explanations and examples to your
documentation site by annotating your code with doc comments, e.g.

```
/**
 * Calculates the square root of a number.
 *
 * @param x the number to calculate the root of.
 * @returns the square root if `x` is non-negative or `NaN` if `x` is negative.
 */
export function sqrt(x: number): number {
    return Math.sqrt(x);
}
```

This project shows off some of TypeDoc's features:

- Built-in support for various TypeScript language constructs
- Markdown in doc comments
- Syntax highlighting in code blocks

## Index of Examples

**Click the "Exports" link in the sidebar to see a complete list of everything in
the package.**

Here are some examples we wanted to highlight:

### Rendering

- External Markdown: [here](documents/External-Markdown.md)
- Markdown showcase: [here](documents/Markdown-Showcase.md)
- Syntax highlighting showcase: [here](documents/Syntax-Highlighting.md)

### Functions

- Simple functions: [\`sqrt\`](functions/sqrt.md) and [\`sqrtArrowFunction\`](functions/sqrtArrowFunction.md)
- A generic function: [\`concat\`](functions/concat.md)
- Functions that take an options object: [\`makeHttpCallA\`](functions/makeHttpCallA.md) and [\`makeHttpCallB\`](functions/makeHttpCallB.md)
- An overloaded function: [\`overloadedFunction\`](functions/overloadedFunction.md)
- An external function exported under a different name: [\`lodashSortBy\`](functions/lodashSortBy.md)

### Types

- Type aliases: [\`SimpleTypeAlias\`](type-aliases/SimpleTypeAlias.md) and [\`ComplexGenericTypeAlias\`](type-aliases/ComplexGenericTypeAlias.md)
- Interfaces: [\`User\`](interfaces/User.md) and [\`AdminUser\`](interfaces/AdminUser.md)

### Classes

- A basic class: [\`Customer\`](classes/Customer.md)
- A subclass: [\`DeliveryCustomer\`](classes/DeliveryCustomer.md)
- A complex class: [\`CancellablePromise\`](classes/CancellablePromise.md)
- A class that extends a built-in generic type: [\`StringArray\`](classes/StringArray.md)

### Enums

- A basic enum: [\`SimpleEnum\`](enumerations/SimpleEnum.md)
- Using the `@enum` tag: [\`EnumLikeObject\`](enumerations/EnumLikeObject.md)

### Variables

- [\`PI\`](variables/PI.md), [\`STRING\_CONSTANT\`](variables/STRING_CONSTANT.md), and [\`ObjectConstant\`](variables/ObjectConstant.md)

### React Components

- Basic React components: [\`CardA\`](functions/CardA.md) and [\`CardB\`](functions/CardB.md)
- A complex React component: [\`EasyFormDialog\`](functions/EasyFormDialog.md) and [\`EasyFormDialogProps\`](interfaces/EasyFormDialogProps.md)
