# Pure Functions, Impure Functions, Side Effects

1. Pure functions must take arguments.
1. The same input will always produce the same output.
1. Pure functions rely only on local state and do not mutate external state (note: console.log changes global state).
1. Pure functions do not produce side effects.
1. Pure functions cannot call impure functions.

```javascript
function half(x) {
  return x / 2;
}
```

## Side Effects

When a function or expression modifies state outside its own context, the result is a side effect.

- Making a call to an API,
- manipulating the DOM
- raising an alert dialog
- writing to a database, etc.

> If a function produces side effects, it is considered impure. Functions that cause side effects are less predictable and harder to test since they result in changes outside their local scope.

```javascript
// impure function producing a side effect
function showAlert() {
  alert('This is a side effect!');
}

// impure function mutating external state
var globalVal = 1;
function incrementGlobalVal(x) {
  globalVal += x;
}

// impure function that resembles a pure function,
function getRandomRange(min, max) {
  return Math.random() * (max - min) + min;
}
```