# Class: WalkInCustomer

Defined in: demo-typedoc/src/classes/Customer.ts:129

A class that extends [\`Customer\`](Customer.md).

Notice how TypeDoc shows the inheritance hierarchy for our class.

## Extends

- [`Customer`](Customer.md)

## Constructors

### Constructor

> **new WalkInCustomer**(`id`, `name`, `nextOrderNumber`): `WalkInCustomer`

Defined in: demo-typedoc/src/classes/Customer.ts:48

The constructor of the `Customer` class.

#### Parameters

##### id

`number`

the customer's database ID

##### name

`string`

the customer's name

##### nextOrderNumber

the next number to use when this customer places an order

`string` | `number`

#### Returns

`WalkInCustomer`

#### Inherited from

[`Customer`](Customer.md).[`constructor`](Customer.md#constructor)

## Properties

### contactName?

> `protected` `optional` **contactName**: `string`

Defined in: demo-typedoc/src/classes/Customer.ts:16

An optional protected property.

#### Inherited from

[`Customer`](Customer.md).[`contactName`](Customer.md#contactname)

***

### id

> `readonly` **id**: `number`

Defined in: demo-typedoc/src/classes/Customer.ts:10

A public readonly property.

#### Inherited from

[`Customer`](Customer.md).[`id`](Customer.md#id)

***

### name

> **name**: `string`

Defined in: demo-typedoc/src/classes/Customer.ts:13

A public property that can be reassigned.

#### Inherited from

[`Customer`](Customer.md).[`name`](Customer.md#name)

***

### trustedCustomer?

> `optional` **trustedCustomer**: `boolean`

Defined in: demo-typedoc/src/classes/Customer.ts:131

A property defined on the subclass.

## Accessors

### nextOrderNumber

#### Get Signature

> **get** **nextOrderNumber**(): `string`

Defined in: demo-typedoc/src/classes/Customer.ts:25

A getter that prepends a number sign to the private `_nextOrderNumber`
property.

##### Returns

`string`

#### Set Signature

> **set** **nextOrderNumber**(`value`): `void`

Defined in: demo-typedoc/src/classes/Customer.ts:33

A setter that takes in either a string or a number and sets the private
`_nextOrderNumber` property.

##### Parameters

###### value

`string` | `number`

##### Returns

`void`

#### Inherited from

[`Customer`](Customer.md).[`nextOrderNumber`](Customer.md#nextordernumber)

## Methods

### isValid()

> `protected` **isValid**(): `boolean`

Defined in: demo-typedoc/src/classes/Customer.ts:70

A protected method.

#### Returns

`boolean`

#### Inherited from

[`Customer`](Customer.md).[`isValid`](Customer.md#isvalid)

***

### onOrderPlaced()

> **onOrderPlaced**(): `void`

Defined in: demo-typedoc/src/classes/Customer.ts:139

An example of overriding a public method.

#### Returns

`void`

#### Overrides

[`Customer`](Customer.md).[`onOrderPlaced`](Customer.md#onorderplaced)

***

### onOrderPlacedArrowFunction()

> **onOrderPlacedArrowFunction**(): `void`

Defined in: demo-typedoc/src/classes/Customer.ts:65

A public method that's defined using an arrow function.

TypeDoc knows to document this as a method rather than a property.

#### Returns

`void`

#### Inherited from

[`Customer`](Customer.md).[`onOrderPlacedArrowFunction`](Customer.md#onorderplacedarrowfunction)
