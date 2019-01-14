:coffee:

The `arity` of a function is the number of arguments it requires. Currying a function means to convert a function of N `arity` into N functions of `arity` 1.

In other words, it restructures a function so it takes one argument, then returns another function that takes the next argument, and so on.

Here's an example:

```js
//Un-curried function
function unCurried(x, y) {
  return x + y;
}

//Curried function
function curried(x) {
  return function(y) {
    return x + y;
  };
}
curried(1)(2); // Returns 3
```

This is useful in your program if you can't supply all the arguments to a function at one time. You can save each function call into a variable, which will hold the returned function reference that takes the next argument when it's available. Here's an example using the curried function in the example above:

```js
// Call a curried function in parts:
var funcForY = curried(1);
console.log(funcForY(2)); // Prints 3
```

Similarly, partial application can be described as applying a few arguments to a function at a time and returning another function that is applied to more arguments.

Here's an example:

```js
//Impartial function
function impartial(x, y, z) {
  return x + y + z;
}
var partialFn = impartial.bind(this, 1, 2);
partialFn(10); // Returns 13
```

:fire:

Fill in the body of the `add` function so it uses currying to `add` parameters `x`, `y`, and `z`.
