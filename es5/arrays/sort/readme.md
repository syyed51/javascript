# `sort`

Sort the elements of array, and return the array. 

```js
var months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort();
console.log(months); //["Dec", "Feb", "Jan", "March"]
```

> arr.sort([compareFunction])

## input 
1. comparison function
    1. first element
    1. second element

## process
Default (no compare function given)
1. convert the element to string using `String()`
1. Compare the element's `unicode` point value. 
1. Decending sort by `unicode` value.

Compare function
1. compare first and second objects manually. 
1. Boolean value will dictate sort order. 

## output
Inplace (Mutated) sorted array. 