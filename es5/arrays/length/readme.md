# Arrays `length`

Arrays have `length` property, what's important is that when you access it elements in arrays are not counted. It simply return largest *index + 1*, there are no performance concerns. 

Always remember that `length` is mutable. 

```js
var arr = [1,2,3];
console.log(arr.length);
arr.length=  20;
console.log(arr.length);
```