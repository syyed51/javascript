# Immediately invoked function expression IIFE

It's exactly as it is named. There is a special way to invoke a function, right when we define it.
Here is how it looks like.

```js
(function() {
  ...
})();
```

## Why are they important

### Fake namespaces

```js
var name = "John";
(function() {
  var name = "Tehseen";
})();

console.log(name);
```

This is because of Javascript has function scope. This is very powerful module pattern.
And they can be passed arguments like any other function.

```js
(function(name) {
  console.log(name);
})("Doe");
```
