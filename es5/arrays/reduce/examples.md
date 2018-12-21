## Example 1
Numbers arrays reduction.

```js
const arr = [1, 2, 3, 4];
arr.reduce((accumulator, current)=> accumulator + current); // 1+2+3+4 = 10
arr.reduce((accumulator, current)=> accumulator + current, 0); // 0+1+2+3+4 = 10
arr.reduce((accumulator, current)=> accumulator + current, 5); // 5+1+2+3+4 = 15
```
## Example 2
Object array reduction 
```js
const arr = [{type:'type', value:10},{type:'type', value:10}];
arr.reduce((a, c) => a.value+c.value); // 10+10=20
```