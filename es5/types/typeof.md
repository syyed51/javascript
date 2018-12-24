# `typeof`

Returns a string indicating the type of the unevaluated operand.

## `typeof` truth table

|Type|Result|
|---:|------:|
|`Undefined`|"undefined"|
|`NaN`      |"number"|
|`Boolean`  |"boolean"|
|`Number`	|"number"|
|`String`	|"string"|
|`Null`	    |"object"|
|`Array`	|"object"|
|`[]`	    |"object"|
|`Date`	    |"object"|
|`{}`	    |"object"|
|`{}`	    |"object"|
|`{}`	    |"object"|
|`{}`	    |"object"|
|`Symbol`   |"symbol"|
|Host object (provided by the JS environment)|	Implementation-dependent|
|`Function` object (implements [[Call]] in ECMA-262 terms)|	"function"|
|Any other object	|"object"|
|`typeof typeof *anything*`| "string"|