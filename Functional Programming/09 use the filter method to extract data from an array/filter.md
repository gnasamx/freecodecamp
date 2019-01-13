:coffee: :star:

Another useful array function is `Array.prototype.filter()`, or simply `filter()`. The filter method returns a new array which is at most as long as the original array, but usually has fewer items.

:zap: Filter doesn't alter the original array, just like map. It takes a callback function that applies the logic inside the callback on each element of the array. If an element returns true based on the criteria in the callback function, then it is included in the new array.

:fire:

The variable `watchList` holds an array of objects with information on several movies. Use a combination of `filter` and `map` to return a new array of objects with only `title` and `rating` keys, but where `imdbRating` is greater than or equal to 8.0. Note that the rating values are saved as strings in the object and you may want to convert them into numbers to perform mathematical operations on them.
