:coffee:

_Concatenation_ means to join items end to end. JavaScript offers the `concat` method for both strings and arrays that work in the same way. For arrays, the method is called on one, then another array is provided as the argument to concat, which is added to the end of the first array. It returns a new array and does not mutate either of the original arrays. Here's an example:

```js
[1, 2, 3].concat([4, 5, 6]);
// Returns a new array [1, 2, 3, 4, 5, 6]
```

:fire:

Use the `concat` method in the `nonMutatingConcat` function to concatenate `attach` to the end of `original`. The function should return the concatenated array.
