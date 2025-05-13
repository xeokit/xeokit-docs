# Class: `abstract` Customer

Defined in: demo-typedoc/src/classes/Customer.ts:8

An abstract base class for the customer entity in our application.

Notice how TypeDoc shows the inheritance hierarchy for our class.

## Extended by

- [`DeliveryCustomer`](DeliveryCustomer.md)
- [`WalkInCustomer`](WalkInCustomer.md)

## Constructors

### Constructor

> **new Customer**(`id`, `name`, `nextOrderNumber`): `Customer`

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

`Customer`

## Properties

### contactName?

> `protected` `optional` **contactName**: `string`

Defined in: demo-typedoc/src/classes/Customer.ts:16

An optional protected property.

***

### id

> `readonly` **id**: `number`

Defined in: demo-typedoc/src/classes/Customer.ts:10

A public readonly property.

***

### name

> **name**: `string`

Defined in: demo-typedoc/src/classes/Customer.ts:13

A public property that can be reassigned.

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

## Methods

### isValid()

> `protected` **isValid**(): `boolean`

Defined in: demo-typedoc/src/classes/Customer.ts:70

A protected method.

#### Returns

`boolean`

***

### onOrderPlaced()

> **onOrderPlaced**(): `void`

Defined in: demo-typedoc/src/classes/Customer.ts:56

A public method. To be called when an order is placed for this customer.

#### Returns

`void`

***

### onOrderPlacedArrowFunction()

> **onOrderPlacedArrowFunction**(): `void`

Defined in: demo-typedoc/src/classes/Customer.ts:65

A public method that's defined using an arrow function.

TypeDoc knows to document this as a method rather than a property.

#### Returns

`void`
