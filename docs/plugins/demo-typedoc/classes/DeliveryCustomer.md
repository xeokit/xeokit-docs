# Class: DeliveryCustomer

Defined in: demo-typedoc/src/classes/Customer.ts:85

A class that extends [\`Customer\`](Customer.md).

Notice how TypeDoc shows the inheritance hierarchy for our class.

## Extends

- [`Customer`](Customer.md)

## Constructors

### Constructor

> **new DeliveryCustomer**(`id`, `name`, `nextOrderNumber`, `subscriptionType`): `DeliveryCustomer`

Defined in: demo-typedoc/src/classes/Customer.ts:100

The constructor of the `DeliveryCustomer` class.

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

##### subscriptionType

whether this customer has a basic or enterprise subscription

`"basic"` | `"enterprise"`

#### Returns

`DeliveryCustomer`

#### Overrides

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

### preferredCourierId?

> `optional` **preferredCourierId**: `number`

Defined in: demo-typedoc/src/classes/Customer.ts:87

A property defined on the subclass.

***

### subscriptionType

> `readonly` **subscriptionType**: `"basic"` \| `"enterprise"`

Defined in: demo-typedoc/src/classes/Customer.ts:90

Another property defined on the subclass.

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

Defined in: demo-typedoc/src/classes/Customer.ts:116

An example of overriding a protected method.

A `DeliveryCustomer` can only have a preferred courier if its
subscription type is enterprise.

#### Returns

`boolean`

#### Overrides

[`Customer`](Customer.md).[`isValid`](Customer.md#isvalid)

***

### onOrderPlaced()

> **onOrderPlaced**(): `void`

Defined in: demo-typedoc/src/classes/Customer.ts:56

A public method. To be called when an order is placed for this customer.

#### Returns

`void`

#### Inherited from

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
