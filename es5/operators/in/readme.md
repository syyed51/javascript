# `in` operator

 Returns `true` if the specified property is in the specified object or its `prototype` chain.

```js
prop in object
```

## With `object`
 ```js
 var car = {make: 'Honda', model: 'Accord', year: 1998};
console.log('make' in car); // true
 ```

 ## with `array`

 ```js
 var trees = ['redwood', 'bay'];
 0 in trees; //true
 1 in trees; //true
 3 in trees; // false
 ```

 `3 in trees` is false because in operator checks for property in keys and it prototype chain.

 ```js
 'PI' in Math          // returns true
 'toString' in {}; // returns true
 ```