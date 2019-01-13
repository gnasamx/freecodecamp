:coffee:

So far, we have seen two distinct principles for functional programming:

1. Don't alter a variable or object - create new variables and objects and return them if need be from a function.

2. Declare function arguments - any computation inside a function depends only on the arguments, and not on any global object or variable.

Adding one to a number is not very exciting, but we can apply these principles when working with arrays or more complex objects.

:fire:

Refactor (rewrite) the code so the global array `bookList` is not changed inside either function. The `add` function should add the given `bookName` to the end of an array. The `remove` function should remove the given `bookName` from an array. Both functions should return an array, and any new parameters should be added before the `bookName` one.
