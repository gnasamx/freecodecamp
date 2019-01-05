:coffee:

You may recall from `Comparison with the Equality Operator` that all comparison operators return a boolean `true` or `false` value.

Sometimes people use an if/else statement to do a comparison, like this:

```javascript
function isEqual(a, b) {
  if (a === b) {
    return true;
  } else {
    return false;
  }
}
```

But there's a better way to do this. Since `===` returns `true` or fa`lse, we can return the result of the comparison:

```javascript
function isEqual(a, b) {
  return a === b;
}
```

:fire:

Fix the function `isLess` to remove the `if/else` statements.
