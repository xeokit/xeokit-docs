# Class: CancellablePromise\<T\>

Defined in: demo-typedoc/src/classes/CancellablePromise.ts:52

This example shows off how TypeDoc handles

- Complex method signatures
- Static methods
- A method with 10 overload signatures. Wow!
    - Only the implementation signature has a doc comment. TypeDoc
      automatically copies the comment from the implementation signature to
      each of the visible signatures if they don't have one.

A promise with a `cancel` method.  If canceled, the `CancellablePromise` will
reject with a `Cancellation` object. Originally from
[real-cancellable-promise](https://github.com/srmagura/real-cancellable-promise).

## Type Parameters

### T

`T`

what the `CancellablePromise` resolves to

## Constructors

### Constructor

> **new CancellablePromise**\<`T`\>(`promise`, `cancel`): `CancellablePromise`\<`T`\>

Defined in: demo-typedoc/src/classes/CancellablePromise.ts:76

#### Parameters

##### promise

`PromiseLike`\<`T`\>

a normal promise or thenable

##### cancel

(`reason?`) => `void`

a function that cancels `promise`. **Calling `cancel` after
`promise` has resolved must be a no-op.**

#### Returns

`CancellablePromise`\<`T`\>

## Properties

### cancel()

> `readonly` **cancel**: (`reason?`) => `void`

Defined in: demo-typedoc/src/classes/CancellablePromise.ts:69

Cancel the `CancellablePromise`.

#### Parameters

##### reason?

`string`

#### Returns

`void`

***

### promise

> `protected` `readonly` **promise**: `Promise`\<`T`\>

Defined in: demo-typedoc/src/classes/CancellablePromise.ts:60

As a consumer of the library, you shouldn't ever need to access
`CancellablePromise.promise` directly.

If you are subclassing `CancellablePromise` for some reason, you
can access this property.

## Methods

Descriptions can be added for groups with `@groupDescription`, which will show up in
the index where groups are listed. This works for both manually created groups which
are created with `@group`, and implicit groups like the `Methods` group that this
description is attached to.

### catch()

> **catch**\<`TResult`\>(`onRejected?`): `CancellablePromise`\<`T` \| `TResult`\>

Defined in: demo-typedoc/src/classes/CancellablePromise.ts:152

Analogous to `Promise.catch`.

#### Type Parameters

##### TResult

`TResult` = `never`

#### Parameters

##### onRejected?

`null` | (`reason`) => `TResult` \| `PromiseLike`\<`TResult`\>

#### Returns

`CancellablePromise`\<`T` \| `TResult`\>

***

### finally()

> **finally**(`onFinally?`): `CancellablePromise`\<`T`\>

Defined in: demo-typedoc/src/classes/CancellablePromise.ts:169

Attaches a callback that is invoked when the Promise is settled
(fulfilled or rejected). The resolved value cannot be modified from the
callback.

#### Parameters

##### onFinally?

The callback to execute when the Promise is settled
(fulfilled or rejected).

`null` | () => `void`

#### Returns

`CancellablePromise`\<`T`\>

A Promise for the completion of the callback.

***

### then()

> **then**\<`TResult1`, `TResult2`\>(`onFulfilled?`, `onRejected?`): `CancellablePromise`\<`TResult1` \| `TResult2`\>

Defined in: demo-typedoc/src/classes/CancellablePromise.ts:101

Analogous to `Promise.then`.

`onFulfilled` on `onRejected` can return a value, a normal promise, or a
`CancellablePromise`. So you can make a chain a `CancellablePromise`s
like this:

```
const overallPromise = cancellableAsyncFunction1()
    .then(cancellableAsyncFunction2)
    .then(cancellableAsyncFunction3)
    .then(cancellableAsyncFunction4)
```

Then if you call `overallPromise.cancel`, `cancel` is called on all
`CancellablePromise`s in the chain! In practice, this means that
whichever async operation is in progress will be canceled.

#### Type Parameters

##### TResult1

`TResult1` = `T`

##### TResult2

`TResult2` = `never`

#### Parameters

##### onFulfilled?

`null` | (`value`) => `TResult1` \| `PromiseLike`\<`TResult1`\>

##### onRejected?

`null` | (`reason`) => `TResult2` \| `PromiseLike`\<`TResult2`\>

#### Returns

`CancellablePromise`\<`TResult1` \| `TResult2`\>

a new CancellablePromise

***

### all()

Analogous to `Promise.all`.

#### Param

an array that may contain `CancellablePromise`s, promises,
thenables, and resolved values

#### Call Signature

> `static` **all**\<`T1`, `T2`, `T3`, `T4`, `T5`, `T6`, `T7`, `T8`, `T9`, `T10`\>(`values`): `CancellablePromise`\<\[`T1`, `T2`, `T3`, `T4`, `T5`, `T6`, `T7`, `T8`, `T9`, `T10`\]\>

Defined in: demo-typedoc/src/classes/CancellablePromise.ts:205

##### Type Parameters

###### T1

`T1`

###### T2

`T2`

###### T3

`T3`

###### T4

`T4`

###### T5

`T5`

###### T6

`T6`

###### T7

`T7`

###### T8

`T8`

###### T9

`T9`

###### T10

`T10`

##### Parameters

###### values

readonly \[`T1` \| `PromiseLike`\<`T1`\>, `T2` \| `PromiseLike`\<`T2`\>, `T3` \| `PromiseLike`\<`T3`\>, `T4` \| `PromiseLike`\<`T4`\>, `T5` \| `PromiseLike`\<`T5`\>, `T6` \| `PromiseLike`\<`T6`\>, `T7` \| `PromiseLike`\<`T7`\>, `T8` \| `PromiseLike`\<`T8`\>, `T9` \| `PromiseLike`\<`T9`\>, `T10` \| `PromiseLike`\<`T10`\>\]

##### Returns

`CancellablePromise`\<\[`T1`, `T2`, `T3`, `T4`, `T5`, `T6`, `T7`, `T8`, `T9`, `T10`\]\>

#### Call Signature

> `static` **all**\<`T1`, `T2`, `T3`, `T4`, `T5`, `T6`, `T7`, `T8`, `T9`\>(`values`): `CancellablePromise`\<\[`T1`, `T2`, `T3`, `T4`, `T5`, `T6`, `T7`, `T8`, `T9`\]\>

Defined in: demo-typedoc/src/classes/CancellablePromise.ts:220

##### Type Parameters

###### T1

`T1`

###### T2

`T2`

###### T3

`T3`

###### T4

`T4`

###### T5

`T5`

###### T6

`T6`

###### T7

`T7`

###### T8

`T8`

###### T9

`T9`

##### Parameters

###### values

readonly \[`T1` \| `PromiseLike`\<`T1`\>, `T2` \| `PromiseLike`\<`T2`\>, `T3` \| `PromiseLike`\<`T3`\>, `T4` \| `PromiseLike`\<`T4`\>, `T5` \| `PromiseLike`\<`T5`\>, `T6` \| `PromiseLike`\<`T6`\>, `T7` \| `PromiseLike`\<`T7`\>, `T8` \| `PromiseLike`\<`T8`\>, `T9` \| `PromiseLike`\<`T9`\>\]

##### Returns

`CancellablePromise`\<\[`T1`, `T2`, `T3`, `T4`, `T5`, `T6`, `T7`, `T8`, `T9`\]\>

#### Call Signature

> `static` **all**\<`T1`, `T2`, `T3`, `T4`, `T5`, `T6`, `T7`, `T8`\>(`values`): `CancellablePromise`\<\[`T1`, `T2`, `T3`, `T4`, `T5`, `T6`, `T7`, `T8`\]\>

Defined in: demo-typedoc/src/classes/CancellablePromise.ts:234

##### Type Parameters

###### T1

`T1`

###### T2

`T2`

###### T3

`T3`

###### T4

`T4`

###### T5

`T5`

###### T6

`T6`

###### T7

`T7`

###### T8

`T8`

##### Parameters

###### values

readonly \[`T1` \| `PromiseLike`\<`T1`\>, `T2` \| `PromiseLike`\<`T2`\>, `T3` \| `PromiseLike`\<`T3`\>, `T4` \| `PromiseLike`\<`T4`\>, `T5` \| `PromiseLike`\<`T5`\>, `T6` \| `PromiseLike`\<`T6`\>, `T7` \| `PromiseLike`\<`T7`\>, `T8` \| `PromiseLike`\<`T8`\>\]

##### Returns

`CancellablePromise`\<\[`T1`, `T2`, `T3`, `T4`, `T5`, `T6`, `T7`, `T8`\]\>

#### Call Signature

> `static` **all**\<`T1`, `T2`, `T3`, `T4`, `T5`, `T6`, `T7`\>(`values`): `CancellablePromise`\<\[`T1`, `T2`, `T3`, `T4`, `T5`, `T6`, `T7`\]\>

Defined in: demo-typedoc/src/classes/CancellablePromise.ts:247

##### Type Parameters

###### T1

`T1`

###### T2

`T2`

###### T3

`T3`

###### T4

`T4`

###### T5

`T5`

###### T6

`T6`

###### T7

`T7`

##### Parameters

###### values

readonly \[`T1` \| `PromiseLike`\<`T1`\>, `T2` \| `PromiseLike`\<`T2`\>, `T3` \| `PromiseLike`\<`T3`\>, `T4` \| `PromiseLike`\<`T4`\>, `T5` \| `PromiseLike`\<`T5`\>, `T6` \| `PromiseLike`\<`T6`\>, `T7` \| `PromiseLike`\<`T7`\>\]

##### Returns

`CancellablePromise`\<\[`T1`, `T2`, `T3`, `T4`, `T5`, `T6`, `T7`\]\>

#### Call Signature

> `static` **all**\<`T1`, `T2`, `T3`, `T4`, `T5`, `T6`\>(`values`): `CancellablePromise`\<\[`T1`, `T2`, `T3`, `T4`, `T5`, `T6`\]\>

Defined in: demo-typedoc/src/classes/CancellablePromise.ts:259

##### Type Parameters

###### T1

`T1`

###### T2

`T2`

###### T3

`T3`

###### T4

`T4`

###### T5

`T5`

###### T6

`T6`

##### Parameters

###### values

readonly \[`T1` \| `PromiseLike`\<`T1`\>, `T2` \| `PromiseLike`\<`T2`\>, `T3` \| `PromiseLike`\<`T3`\>, `T4` \| `PromiseLike`\<`T4`\>, `T5` \| `PromiseLike`\<`T5`\>, `T6` \| `PromiseLike`\<`T6`\>\]

##### Returns

`CancellablePromise`\<\[`T1`, `T2`, `T3`, `T4`, `T5`, `T6`\]\>

#### Call Signature

> `static` **all**\<`T1`, `T2`, `T3`, `T4`, `T5`\>(`values`): `CancellablePromise`\<\[`T1`, `T2`, `T3`, `T4`, `T5`\]\>

Defined in: demo-typedoc/src/classes/CancellablePromise.ts:270

##### Type Parameters

###### T1

`T1`

###### T2

`T2`

###### T3

`T3`

###### T4

`T4`

###### T5

`T5`

##### Parameters

###### values

readonly \[`T1` \| `PromiseLike`\<`T1`\>, `T2` \| `PromiseLike`\<`T2`\>, `T3` \| `PromiseLike`\<`T3`\>, `T4` \| `PromiseLike`\<`T4`\>, `T5` \| `PromiseLike`\<`T5`\>\]

##### Returns

`CancellablePromise`\<\[`T1`, `T2`, `T3`, `T4`, `T5`\]\>

#### Call Signature

> `static` **all**\<`T1`, `T2`, `T3`, `T4`\>(`values`): `CancellablePromise`\<\[`T1`, `T2`, `T3`, `T4`\]\>

Defined in: demo-typedoc/src/classes/CancellablePromise.ts:280

##### Type Parameters

###### T1

`T1`

###### T2

`T2`

###### T3

`T3`

###### T4

`T4`

##### Parameters

###### values

readonly \[`T1` \| `PromiseLike`\<`T1`\>, `T2` \| `PromiseLike`\<`T2`\>, `T3` \| `PromiseLike`\<`T3`\>, `T4` \| `PromiseLike`\<`T4`\>\]

##### Returns

`CancellablePromise`\<\[`T1`, `T2`, `T3`, `T4`\]\>

#### Call Signature

> `static` **all**\<`T1`, `T2`, `T3`\>(`values`): `CancellablePromise`\<\[`T1`, `T2`, `T3`\]\>

Defined in: demo-typedoc/src/classes/CancellablePromise.ts:289

##### Type Parameters

###### T1

`T1`

###### T2

`T2`

###### T3

`T3`

##### Parameters

###### values

readonly \[`T1` \| `PromiseLike`\<`T1`\>, `T2` \| `PromiseLike`\<`T2`\>, `T3` \| `PromiseLike`\<`T3`\>\]

##### Returns

`CancellablePromise`\<\[`T1`, `T2`, `T3`\]\>

#### Call Signature

> `static` **all**\<`T1`, `T2`\>(`values`): `CancellablePromise`\<\[`T1`, `T2`\]\>

Defined in: demo-typedoc/src/classes/CancellablePromise.ts:297

##### Type Parameters

###### T1

`T1`

###### T2

`T2`

##### Parameters

###### values

readonly \[`T1` \| `PromiseLike`\<`T1`\>, `T2` \| `PromiseLike`\<`T2`\>\]

##### Returns

`CancellablePromise`\<\[`T1`, `T2`\]\>

#### Call Signature

> `static` **all**\<`T`\>(`values`): `CancellablePromise`\<`T`[]\>

Defined in: demo-typedoc/src/classes/CancellablePromise.ts:301

##### Type Parameters

###### T

`T`

##### Parameters

###### values

readonly (`T` \| `PromiseLike`\<`T`\>)[]

##### Returns

`CancellablePromise`\<`T`[]\>

***

### allSettled()

#### Call Signature

> `static` **allSettled**\<`T`\>(`values`): `CancellablePromise`\<\{ -readonly \[P in string \| number \| symbol\]: PromiseSettledResult\<T\[P\<P\>\] extends PromiseLike\<U\> ? U : T\[P\<P\>\]\> \}\>

Defined in: demo-typedoc/src/classes/CancellablePromise.ts:327

Creates a `CancellablePromise` that is resolved with an array of results
when all of the provided `Promises` resolve or reject.

##### Type Parameters

###### T

`T` *extends* readonly `unknown`[] \| readonly \[`unknown`\]

##### Parameters

###### values

`T`

An array of `Promises`.

##### Returns

`CancellablePromise`\<\{ -readonly \[P in string \| number \| symbol\]: PromiseSettledResult\<T\[P\<P\>\] extends PromiseLike\<U\> ? U : T\[P\<P\>\]\> \}\>

A new `CancellablePromise`.

#### Call Signature

> `static` **allSettled**\<`T`\>(`values`): `CancellablePromise`\<`PromiseSettledResult`\<`T` *extends* `PromiseLike`\<`U`\> ? `U` : `T`\>[]\>

Defined in: demo-typedoc/src/classes/CancellablePromise.ts:345

Creates a `CancellablePromise` that is resolved with an array of results
when all of the provided `Promise`s resolve or reject.

##### Type Parameters

###### T

`T`

##### Parameters

###### values

`Iterable`\<`T`\>

An array of `Promise`s.

##### Returns

`CancellablePromise`\<`PromiseSettledResult`\<`T` *extends* `PromiseLike`\<`U`\> ? `U` : `T`\>[]\>

A new `CancellablePromise`. Canceling it cancels all of the input
promises.

***

### delay()

> `static` **delay**(`ms`): `CancellablePromise`\<`void`\>

Defined in: demo-typedoc/src/classes/CancellablePromise.ts:385

#### Parameters

##### ms

`number`

#### Returns

`CancellablePromise`\<`void`\>

a `CancellablePromise` that resolves after `ms` milliseconds.

***

### race()

> `static` **race**\<`T`\>(`values`): `CancellablePromise`\<`Awaited`\<`T`\>\>

Defined in: demo-typedoc/src/classes/CancellablePromise.ts:370

Creates a `CancellablePromise` that is resolved or rejected when any of
the provided `Promises` are resolved or rejected.

#### Type Parameters

##### T

`T`

#### Parameters

##### values

readonly `T`[]

An array of `Promises`.

#### Returns

`CancellablePromise`\<`Awaited`\<`T`\>\>

A new `CancellablePromise`. Canceling it cancels all of the input
promises.

***

### reject()

> `static` **reject**\<`T`\>(`reason?`): `CancellablePromise`\<`T`\>

Defined in: demo-typedoc/src/classes/CancellablePromise.ts:201

Analogous to `Promise.reject`.

Like `CancellablePromise.resolve`, canceling the returned
`CancellablePromise` is a no-op.

#### Type Parameters

##### T

`T`

#### Parameters

##### reason?

`unknown`

this should probably be an `Error` object

#### Returns

`CancellablePromise`\<`T`\>

***

### resolve()

#### Call Signature

> `static` **resolve**(): `CancellablePromise`\<`void`\>

Defined in: demo-typedoc/src/classes/CancellablePromise.ts:185

Analogous to `Promise.resolve`.

The returned promise should resolve even if it is canceled. The idea is
that the promise is resolved instantaneously, so by the time the promise
is canceled, it has already resolved.

##### Returns

`CancellablePromise`\<`void`\>

#### Call Signature

> `static` **resolve**\<`T`\>(`value`): `CancellablePromise`\<`T`\>

Defined in: demo-typedoc/src/classes/CancellablePromise.ts:187

Analogous to `Promise.resolve`.

The returned promise should resolve even if it is canceled. The idea is
that the promise is resolved instantaneously, so by the time the promise
is canceled, it has already resolved.

##### Type Parameters

###### T

`T`

##### Parameters

###### value

`T`

##### Returns

`CancellablePromise`\<`T`\>
