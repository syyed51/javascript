# Making object copy in Javascript

In javascript there are two type of copies:
1. `Shallow copy` 
2. `Deep copy`    


## Shallow copy
Javascript makes copy of object if it has primitives only.

```js
var obj = {
    name: 'Tehseen', 
    Age : 100,
    status: true, 
    work: undefined, 
    home: null
}

// Spread for copy
var copy = {...obj}

copy.name = 'Abbas';
console.log(obj.name); // Tehseen
console.log(copy.name); //Abbas
if(obj.name === copy.name) {console.log("spread operator copy failed")}


// Object assign for copy
var copy2 = Object.assign({},obj);

copy.name = 'Abbas';
console.log(obj.name); // Tehseen
console.log(copy2.name); //Abbas
if(obj.name === copy.name) {console.log("Object assign operator copy failed")}

```

## Copy with nested object
- Two objects share same **data** but not memory.
```js
var obj = {
    nest:{
    name: 'Tehseen', 
    Age : 100,
    status: true, 
    work: undefined, 
    home: null
    }
}

// Spread for copy
var copy = {...obj}

copy.nest.name = 'Abbas';
console.log(obj.nest.name !== copy.nest.name); //true
```
Here 'copy' and 'obj' points to same data.

![Image](./AWKJa.jpg)

## How to make deep copy:
