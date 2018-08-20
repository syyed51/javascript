# Bind

The `bind()` method creates a new function that, when called, has its `this` keyword set to the provided value.

```js
var person = {
  name: "Tehseen",
  getName: function() {
    return this.name;
  }
};
var unboundGetName = person.getName;
console.log(unboundGetName());

var boundGetName = unboundGetName.bind(person);
console.log(boundGetName());
```
