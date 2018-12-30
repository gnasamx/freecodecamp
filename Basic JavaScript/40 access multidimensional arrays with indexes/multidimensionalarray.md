:coffee:

One way to think of a _multi-dimensional array_, is as an array of arrays. When you use brackets to access your array, the first set of brackets refers to the entries in the outer-most (the first level) array, and each additional pair of brackets refers to the next level of entries inside.

Example

```javascript
var arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [[10, 11, 12], 13, 14]];
arr[3]; // equals [[10,11,12], 13, 14]
arr[3][0]; // equals [10,11,12]
arr[3][0][1]; // equals 11
```

Note
There shouldn't be any spaces between the array name and the square brackets, like array [0][0] and even this array [0][0] is not allowed. Although JavaScript is able to process this correctly, this may confuse other programmers reading your code.

:fire:

Using bracket notation select an element from myArray such that myData is equal to 8.
