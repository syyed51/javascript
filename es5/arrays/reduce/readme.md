# reduce

Executes a reducer function on each member of the array resulting in a single output value.

```js
arr.reduce(callback[, initialValue])
```

> It generally good idea to provide optional initial value to `reduce` function, it possible to get 3 different results. Take a look at follwoing procedure. 

```js
var findMax = (a,c) =>  Math.max(a.x, c.max);
[ ].reduce(findMax);            //type error
[{ x : 22 }].reduce(findMax);   // { x : 22 }
[{ x : 22 }, { x : 11 }].reduce(findMax);   // 11 + 22 = 33
```

