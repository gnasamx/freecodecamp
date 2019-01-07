:coffee:

An array's length, like the data types it can contain, is not fixed. Arrays can be defined with a length of any number of elements, and elements can be added or removed over time; in other words, arrays are _mutable_. In this challenge, we will look at two methods with which we can programmatically modify an array: `Array.push()` and `Array.unshift()`.

Both methods take one or more elements as parameters and add those elements to the array the method is being called on; :zap: the `push()` method adds elements to the end of an array, and :zap: `unshift()` adds elements to the beginning. Consider the following:

```js
let twentyThree = "XXIII";
let romanNumerals = ["XXI", "XXII"];

romanNumerals.unshift("XIX", "XX");
// now equals ['XIX', 'XX', 'XXI', 'XXII']

romanNumerals.push(twentyThree);
// now equals ['XIX', 'XX', 'XXI', 'XXII', 'XXIII']
```

Notice that we can also pass variables, which allows us even greater flexibility in dynamically modifying our array's data.

:fire:

We have defined a function, `mixedNumbers`, which we are passing an array as an argument. Modify the function by using `push()` and `unshift()` to add `'I'`, `2`, `'three'` to the beginning of the array and `7`, `'VIII'`, `9` to the end so that the returned array contains representations of the numbers 1-9 in order.
