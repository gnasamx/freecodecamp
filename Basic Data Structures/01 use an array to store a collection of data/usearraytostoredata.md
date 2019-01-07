:coffee: :headphones:

The below is an example of the simplest implementation of an array data structure. This is known as a _one-dimensional array_, meaning it only has one level, or that it does not have any other arrays nested within it. :zap: Notice it contains _booleans_, _strings_, and _numbers_, among other valid JavaScript data types:

```js
let simpleArray = ['one', 2, 'three’, true, false, undefined, null];
console.log(simpleArray.length);
// logs 7
```

All array's have a length property, which as shown above, can be very easily accessed with the syntax `Array.length`.

A more complex implementation of an array can be seen below. This is known as a _multi-dimensional array_, or an array that contains other arrays. Notice that this array also contains JavaScript _objects_, which we will examine very closely in our next section, but for now, all you need to know is that arrays are also capable of storing complex objects.

```js
let complexArray = [
[
{
one: 1,
two: 2
},
{
three: 3,
four: 4
}
],
[
{
a: "a",
b: "b"
},
{
c: "c",
d: “d”
}
]
];
```

:fire:

We have defined a variable called `yourArray`. Complete the statement by assigning an array of at least 5 elements in length to the `yourArray` variable. Your array should contain at least one _string_, one _number_, and one _boolean_.
