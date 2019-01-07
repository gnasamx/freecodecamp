:coffee:

Since arrays can be changed, or _mutated_, at any time, there's no guarantee about where a particular piece of data will be on a given array, or if that element even still exists. Luckily, JavaScript provides us with another built-in method, `indexOf()`, that allows us to quickly and easily check for the presence of an element on an array. `indexOf()` takes an element as a parameter, and when called, it returns the position, or index, of that element, or -1 if the element does not exist on the array.

For example:

```js
let fruits = ["apples", "pears", "oranges", "peaches", "pears"];

fruits.indexOf("dates"); // returns -1
fruits.indexOf("oranges"); // returns 2
fruits.indexOf("pears"); // returns 1, the first index at which the element exists
```

:fire:

`indexOf()` can be incredibly useful for quickly checking for the presence of an element on an array. We have defined a function, `quickCheck`, that takes an array and an element as arguments. Modify the function using `indexOf()` so that it returns `true` if the passed element exists on the array, and `false` if it does not.
