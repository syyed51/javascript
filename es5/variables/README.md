# Variables in Javascript

A variable is named container used for storing values.

## Definition

```javascript
var name;
```

This statement will:

1. Reserve a container in memory, call it `name`.

1. `Type` will be decided at run-time (i.e when you assign it a value.)

1. `Size` of the container, will also be dynamic.

1. The container will be `initialized` with value `undefined`.

1. It will have function scope. 

1. And will be `garbage collected`, when there are no `references` to it. Directly or indirectly.

## Assignment

```javascript
name = "Tehseen";
```

```javascript
name = null;
```

Above statement will:

1. assign new value `Tehseen` to name variable.

1. Type information of the variable name will be setup. ( i.e.`typeof` name)

1. `null` assignment will reduce the number of references to the variable. 

> Next: [function scope](../scope/README.md)
