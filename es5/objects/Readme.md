# Objects

Everything is an `Object` in Javascript(except primitives), even function are special type of `Object`.

## Introduction

Objects are key, value pairs.

```javascript
var obj = new Object();
obj.key = value;

typeof obj; //"object"
obj instanceof Object; // true
```

## Type

Values are one of the 6 primary primitive types (called "language types" in the specification) in JS:

1. `string`
1. `number`
1. `boolean`
1. `null`
1. `undefined`
1. `object`

These primitives are not themselves `Objects`. Not that `null` is it own type, it neither `Object` not `primitives`.

## Built-in Objects

There are several other `object` sub-types, usually referred to as built-in objects. These are actually just built-in functions which you can use with **`new`** keyword to create objects.

1. `String`
1. `Number`
1. `Boolean`
1. `Object`
1. `Function`
1. `Array`
1. `Date`
1. `RegExp`
1. `Error`

The primitive value "I am a string" is not an object, it's a primitive literal and immutable value. To perform operations on it, such as checking its length, accessing its individual character contents, etc, a String object is required.

> Fortunately, Javascript coerces a `"string"` primitive to a `"String"` `object` wherever need. That's why alwyas use primitive form.

```javascript
var a = "Hello";
var b = "World";

typeof a;       //"string"
typeof b;       //"object"

a instalceof String     //false
b instalceof String     //true

// inspect the object sub-type
Object.prototype.toString.call( b );    // [object String]
```

> In objects, property names are always strings, if they are not; V8 coerse them to string.
