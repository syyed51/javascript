# How equality operator works

**tl;dr** — Don’t use double-equals!

Most of us thinks `==` compares values and `===` compares values and types. In other words, `1` `==` `"1"` will be true, and `1` `===` `"1"` will be false. This is somewhat true but far more complicated.

Some of the confusion comes from thinking that `==` is somehow related to truthiness, which is all about how variables get coerced into booleans — which happens in an if statement like this:
```js
if (something) {}
```
In that case — `0`, `""` the empty string, `null`, `undefined`, and `NaN` will all return `false`. Non-zero numbers, Non-empty `strings`, `arrays` and `objects` (empty or not) will all return true. Most devs have a pretty good handle on this.

## But…? 

Does that mean that a non-zero number, or all non-empty strings will double-equal true? This is where things can get confusing.

```js
if ('a') {           // true
if ('a' == true) {   // false
if ('a' == false) {  // false

if (2) {             // true
if (2 == true) {     // false
if (1 == true) {     // true
Hopefully that makes it clear that truthiness has nothing to do with ==.
```
>**Remember**: `truthiness` is about coercion into booleans. With double-equals, nothing will ever get coerced into a boolean. 

**what’s really going on?**

The answer is the **Abstract Equality Comparison Algorithm**. If the two types differ, JS follows a particular process for converting them into the same type, so that it can compare them. If types don’t match somewhere along the way — the endgame will be numbers.

1. **First**, `booleans` are converted to `numbers`. `True` becomes `1` and `false` becomes `0`.
1. **Next**, `objects` will be turned into `strings` using `.toString()` (unless you modified .valueOf() to return a primitive). So `[1]` becomes `"1"`, `[1,2]` becomes `"1,2"`, and both `{...}` and `[{...}]` become `"[object Object]"`.
1. If a `string` and a `number` are left, the `string` is converted to a `number` (so any string with non-number characters will become `NaN` — which, by the way, never ever equals anything, including itself).
1. `null` and `undefined` equal themselves and each other.

| x | y | == | === | Object.is | SameValueZero |
|:--|:- |:-- | --- | :-------: | :-----------:|
| `undefined`| `undefined`| `true`| `true`| `true`| `true` |
|`null`|	`null`|	true|	true|	true|	true|
|`true`|	`true`|	true|	true|	true|	true|
|`false`|	`false`|	true|	true|	true|	true|
|'foo'|	'foo'|	true|	true|	true|	true|
|`0`|	`0`|	true|	true|	true|	true|
|`+0`|	`-0`|	true|	true|	**`false`**|	true|
|`+0`|	`0`|	true|	true|	true|	true|
|`-0`|	`0`|	true|	true|	**`false`**|	true|
|`0`|	`false`|	true|	false|	false|	false|
|`""`|	`false`|	true|	false|	false|	false|
|`""`|	`0`|	true|	false|	false|	false|
|`'0'`|	`0`|	true|	false|	false|	false|
|'17'|	17|	true|	false|	false|	false|
|[1, 2]|	'1,2'|	true|	false|	false|	false|
|new String('foo')|	'foo'|	true|	false|	false|	false|
|null|	undefined|	true|	false|	false|	false|
|null|	false|	false|	false|	false|	false|
|undefined|	false|	false|	false|	false|	false|
|{ foo: 'bar' }|	{ foo: 'bar' }|	false|	false|	false|	false|
|new String('foo')|	new String('foo')|	false|	false|	false|	false|
|0|	null|	false|	false|	false|	false|
|0|	NaN|	false|	false|	false|	false|
|'foo'|	NaN|	false|	false|	false|	false|
|NaN|	NaN|	false|	false|	**`true`**|	**`true`**|