# Identity
Identity / strict equality/ `===` operator returns true if the operands are strictly equal with **no type conversion**.

```js
3 === 3   // true
3 === '3' // false
var object1 = {'key': 'value'}, 
object2 = {'key': 'value'};
object1 === object2 //false
```


