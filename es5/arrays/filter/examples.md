


## filter empty objects

```js
    var arr = [
        "test", 
        "", 
        null, 
        undefined, 
        0, 
        1,
        Infinity, 
        -Infinity, 
        {}, 
        []
    ];
    arr.filter (e => e);
    // ["test", 1, Infinity, -Infinity, {}, Array(0)]
```