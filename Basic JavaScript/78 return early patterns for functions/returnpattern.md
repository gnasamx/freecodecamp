:coffee:

When a `return` statement is reached, the execution of the current function stops and control returns to the calling location.

Example

```javascript
function myFun() {
  console.log("Hello");
  return "World";
  console.log("byebye");
}
myFun();
```

The above outputs "Hello" to the console, returns "World", but "byebye" is never output, because the function exits at the return statement.

:fire:

Modify the function `abTest` so that if `a` or `b` are less than `0` the function will immediately exit with a value of `undefined`.

Hint

:zap: Remember that `undefined` is a keyword, not a string.
