# `instalceof` operator

Test whether the prototype property of a constructor appears anywhere in the prototype chain of an object.

> `object` instanceof `constructor`

`object`
The object to test.
`constructor`
Function to test against

```js
function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}
var auto = new Car('Honda', 'Accord', 1998); // true

console.log(auto instanceof Object);         // true
```

## Beware

```js
var simpleStr = 'This is a simple string'; 
simpleStr instanceof String; // false, 
```
Because `String` ctor is not in prototype chain.

