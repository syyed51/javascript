# FIFO or `queue`

Array has FIFO method built in. 

1. `shift` - return the first element and delete the item.
1. `push`  - add new element at the end. 

```js
var arr = [1,2,3,4,5];
var firstEle = arr.shift();
console.log(arr);

var newLen = arr.push(6);
console.log(arr);
```