# Reverse FIFO

1. `unshift` - add one/more element/s at the beginning of array AND return new array.
1. `pop`     - remove last element AND return it. 


```js
var arr = [1,2,3,4];
var newLen = arr.unshift([9,8]);
console.log(arr);

var lastEle = arr.pop();
console.log(arr);
```