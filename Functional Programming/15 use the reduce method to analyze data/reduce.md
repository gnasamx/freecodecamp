:coffee: :headphones: :black_heart:

`Array.prototype.reduce()`, or simply `reduce()`, is the most general of all array operations in JavaScript. You can solve almost any array processing problem using the reduce method.

This is not the case with the `filter` and `map` methods since they do not allow interaction between two different elements of the array. For example, if you want to compare elements of the array, or add them together, filter or map could not process that.

The `reduce` method allows for more general forms of array processing, and it's possible to show that both `filter` and `map` can be derived as a special application of `reduce`.

However, before we get there, let's practice using reduce first.

:fire:

The variable `watchList` holds an array of objects with information on several movies. Use `reduce` to find the average IMDB rating of the movies directed by Christopher Nolan. Recall from prior challenges how to `filter` data and `map` over it to pull what you need. You may need to create other variables, but save the final average into the variable `averageRating`. Note that the rating values are saved as strings in the object and need to be converted into numbers before they are used in any mathematical operations.
