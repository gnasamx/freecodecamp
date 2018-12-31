:coffee:

The strict inequality operator (`!==`) is the logical opposite of the strict equality operator. It means "Strictly Not Equal" and returns `false` where strict equality would return true and vice versa. :start: Strict inequality will not convert data types.

Examples

```javascript
3 !== 3; // false
3 !== "3"; // true
4 !== 3; // true
```

:fire:

Add the _strict inequality operator_ to the `if` statement so the function will return `"Not Equal"` when `val` is not strictly equal to `17`
