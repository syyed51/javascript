# Equality operator is not transitive

## Primitive types
```js
'' != '0'
'' == 0
0 == '0'
false != 'false'
false != '0'
false != undefined
false != null
null == undefined
' \t\r\n ' == 0
```
> All above expressions are `truthy`.

## Object types
```js
var a = [1,2,3]; 
var b = [1,2,3]; 
var c = { x: 1, y: 2 }; 
var d = { x: 1, y: 2 };  
var e = "text"; 
var f = "te" + "xt";  
a == b            // false 
a === b           // false  
c == d            // false 
c === d           // false  
e == f            // true 
e === f           // true 
```

## object literals
```js
<pre lang="Javascript">"abc" == new String("abc")
"abc" !== new String("abc")
```
> Above expressions are `truthy`.