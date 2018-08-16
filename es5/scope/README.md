# Scope

ES 5 have function scoping for variable.

## function scope

Function scope means body of the function. Eludding that, a variable with function scope; will be available in the whole body of function, it is declared in. Wherever you define it.

> test 1

```javascript
function fun(){
    console.log(name);
    var name = "Tehseen";
    console.log(name);
}
```

> test 2

```javascript
function fun(){
    console.log(name);
     if(true){
        var name = "Tehseen";
    }
    console.log(name);
}
```

### Scope

Scope means, where something will be accessible, `{}` defines a scope.

Next: [es6 lexical scope](../../es6/scope/README.md)