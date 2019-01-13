:coffee:

So far we have learned to use pure functions to avoid side effects in a program. Also, we have seen the value in having a function only depend on its input arguments.

This is only the beginning. As its name suggests, functional programming is centered around a theory of functions.

It would make sense to be able to pass them as arguments to other functions, and return a function from another function. Functions are considered _First Class Objects_ in JavaScript, which means they can be used like any other object. They can be saved in variables, stored in an object, or passed as function arguments.

Let's start with some simple array functions, which are methods on the array object prototype. In this exercise we are looking at `Array.prototype.map()`, or more simply `map`.

:zap: Remember that the map method is a way to iterate over each item in an array. It creates a new array (without changing the original one) after applying a callback function to every element.

:fire:

The `watchList` array holds objects with information on several movies. Use `map` to pull the `title` and `rating` from `watchList` and save the new array in the `rating` variable. The code in the editor currently uses a `for` loop to do this, replace the loop functionality with your `map` expression.
