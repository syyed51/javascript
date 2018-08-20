# Function

Functions in javascript are first-class. That means, functions can be treated as objects.

1. They can be store in variables.
1. Pass to a function as arguments.
1. They can also evaluate to a value.

## Function statement

```js
function greet() {
  console.log("Hello Javascript!");
}

function logGreet(fn) {
  fn();
}
logGreet(greet);
```

## Function expression

Function expression, like other expression evaluates to a value, and the value is a function.

```js
let greetMe = function() {
  console.log("Hello Tehseen!");
};

greetMe(); //invoke it.
logGreet(greetMe); // pass it around.
```

Creating function expression on the fly.

```js
let callGreeting = function(fn) {
  fn();
};

callGreeting(function() {
  console.log("Hello");
});
```
