# Here's a list of the most commonly used natives

- `String()`
- `Number()`
- `Boolean()`
- `Array()`
- `Object()`
- `Function()`
- `RegExp()`
- `Date()`
- `Error()`

As you can see, these natives are actually built-in constructor functions.

```js
var s = new String("Hello World!");

console.log(s.toString()); // "Hello World!"
```

It _is_ true that each of these natives can be used as a native constructor. But what's being constructed may be different than you think.

```js
var a = new String("abc");

typeof a; // "object" ... not "String"

a instanceof String; // true

Object.prototype.toString.call(a); // "[object String]"
```

The result of the constructor form of value creation (`new String("abc")`) is an object wrapper around the primitive (`"abc"`) value.

Importantly, `typeof` shows that these objects are not their own special _types_, but more appropriately they are subtypes of the `object` type.

This object wrapper can further be observed with:

```js
console.log(a);
```
