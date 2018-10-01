# Accessing Object Properties

The syntax for accessing the property of an object is:

```javascript
objectName.property; // person.age
objectName["property"]; // person["age"]
objectName[property]; // x = "age"; person[x]
```

```javascript
var obj = {
  a: 2
};
var key = "a";

obj.a; // 2
obj["a"]; // 2
obj[key]; //2
```

## Property vs. Method

> functions and methods are interchangeable at best in javascript [Kyle Simpson](https://github.com/getify/You-Dont-Know-JS/blob/master/this%20%26%20object%20prototypes/ch3.md)
