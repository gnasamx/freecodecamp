:coffee: :star:

You can use `typeof` to check the data structure, or type, of a variable. This is useful in debugging when working with multiple data types. If you think you're adding two numbers, but one is actually a string, the results can be unexpected. Type errors can lurk in calculations or function calls. Be careful especially when you're accessing and working with external data in the form of a JavaScript Object Notation (JSON) object.

Here are some examples using `typeof`:

```js
console.log(typeof ""); // outputs "string"
console.log(typeof 0); // outputs "number"
console.log(typeof []); // outputs "object"
console.log(typeof {}); // outputs "object"
```

JavaScript recognizes six primitive (immutable) data types: `Boolean`, `Null`, `Undefined`, `Number`, `String`, and `Symbol` (new with ES6) and one type for mutable items: `Object`. Note that in JavaScript, arrays are technically a type of object.

:fire:

Add two `console.log()` statements to check the `typeof` each of the two variables `seven` and `three` in the code.
