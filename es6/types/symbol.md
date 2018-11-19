# Symbol
Symbol type is a new feature in ECMAScript 2015 and there is no ECMAScript 5 equivalent for symbol.


```js
var sym = Symbol();
console.log(typeof sym);
```



```js
Symbol("foo") !== Symbol("foo")
const foo = Symbol()
const bar = Symbol()
typeof foo === "symbol"
typeof bar === "symbol"
let obj = {}
obj[foo] = "foo"
obj[bar] = "bar"
JSON.stringify(obj) // {}
Object.keys(obj) // []
Object.getOwnPropertyNames(obj) // []
Object.getOwnPropertySymbols(obj) // [ Symbol(), Symbol() ]
```

1. values of this type can be used to make object properties that are anonymous

A value having the data type "symbol" can be referred to as a "symbol value."  In the JavaScript run-time environment, a symbol value is created by invoking the function Symbol(), which dynamically produces an anonymous, unique value. A symbol may be used as an object property.

```js
var  myPrivateMethod  = Symbol();
this[myPrivateMethod] = function() {...};
```