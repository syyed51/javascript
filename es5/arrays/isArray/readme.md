# isArray
Determining whether a given object is an array has been one of the classic problems in Javascript.

When dealing with a single page, a single global scope and therefore a single Array global object things are easy:
```js
if (value instanceof Array) {
// do some array stuff 
}
```

The problem with instanceof is that it assumes a single global execution context. Having multiple frames means multiple contexts and more than one Array global object. 

ECMAScript 5 come with the solution by introducing the method `Array.isArray(value)`. It’s not affected by the number of global scopes. If you support ECMAScript 5 in your project, this is the best solution.