:coffee: :star:

Ok, so we've learned how to remove elements from the beginning and end of arrays using `shift()` and `pop()`, but what if we want to remove an element from somewhere in the middle? Or remove more than one element at once? Well, that's where `splice()` comes in. :zap: splice() allows us to do just that: remove any number of consecutive elements from anywhere in an array.

`splice()` can take up to 3 parameters, but for now, we'll focus on just the first 2. The first two parameters of splice() are integers which represent indexes, or positions, of the array that `splice()` is being called upon. And remember, arrays are zero-indexed, so to indicate the first element of an array, we would use `0`. `splice()`'s first parameter represents the index on the array from which to begin removing elements, while the second parameter indicates the number of elements to delete. For example:

```js
let array = ["today", "was", "not", "so", "great"];

array.splice(2, 2);
// remove 2 elements beginning with the 3rd element
// array now equals ['today', 'was', 'great']
```

:hearts: `splice()` not only modifies the array it's being called on, but it also returns a new array containing the value of the removed elements:

```js
let array = ["I", "am", "feeling", "really", "happy"];

let newArray = array.splice(3, 2);
// newArray equals ['really', 'happy']
```

:fire:

We've defined a function, `sumOfTen`, which takes an array as an argument and returns the sum of that array's elements. Modify the function, using `splice()`, so that it returns a value of `10`.
