# Javascript require

# module

A reusable block of code, whos existence does not accidentally impact other code.

## Common JS modules

An agreed upon standard, how to strcture modules.

## module.exports

```javascript
module.exports = function log() {
  console.log("mylog");
};

// or

module.exports.log = function log() {
  console.log("my log");
};
```

Module is simply an object provided by node runtime, where exports is a proprty on it. Initially this property is empty; you can assign/overwrite it. And whatever there is in `module.exports` is made available, when you import this module.

## exports

```javascript
exports.foo = function() {
  console.log(`foo module`);
};
```

Please note that `exports` is an alias to `module.exports`, you should always assign values to it, rather than overwriting. If you overwrite this alias, `module.exports` will go `undefined`.

## require('./path_to_file')

```javascript
var module = require(`./path_to_module`);
```

`require` is native node module, which

- executes your module
- Wrap it around with an IFFE, for namespace scoping
- And return you `module.exports` object.

## Gotchas

```javascript
exports is alias for module.exports, never overwrite it.
```

Further reading:

1. CommonJS [docs](https://requirejs.org/docs/commonjs.html)
