:coffee:

Instead of generating a random number between zero and a given number like we did before, we can generate a random number that falls within a range of two specific numbers.

To do this, we'll define a minimum number `min` and a maximum number max.

Here's the formula we'll use. Take a moment to read it and try to understand what this code is doing:

```javascript
Math.floor(Math.random() * (max - min + 1)) + min;
```

:fire:

Create a function called randomRange that takes a range myMin and myMax and returns a random number that's greater than or equal to myMin, and is less than or equal to myMax, inclusive.
