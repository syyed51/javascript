# Object.is

The Object.is() method determines whether two values are the same value.
```js
Object.is(value1, value2);
```

## Algorithm

1. both `undefined`
2. both `null`
3. both `true` or both `false`
4. both `strings` of the same length with the same characters in the same order
5. both the same `object`
6. both `numbers` and
    1. both `+0`
    1. both `-0`
    1. both `NaN`
    1. or both non-zero and both not `NaN` and both have the same value

> **No coersion** : This is not the same as being equal according to the `==` operator. The `==` operator applies various coercions to both sides (if they are not the same Type) before testing for equality (resulting in such behavior as "" `==` `false` being true), but Object.is doesn't coerce either value.

> **Signed int and NaN**: This is also not the same as being equal according to the `===` operator. The `===` operator (and the `==` operator as well) treats the number values -0 and +0 as equal and treats Number.NaN as not equal to NaN.


## examples

```js
Object.is('foo', 'foo');     // true
Object.is(window, window);   // true

Object.is('foo', 'bar');     // false
Object.is([], []);           // false

var test = { a: 1 };
Object.is(test, test);       // true

Object.is(null, null);       // true

// Special Cases
Object.is(0, -0);            // false
Object.is(-0, -0);           // true
Object.is(NaN, 0/0);         // true
```

## Polyfill
```js
if (!Object.is) {
  Object.is = function(x, y) {
    // SameValue algorithm
    if (x === y) { // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  };
}
```