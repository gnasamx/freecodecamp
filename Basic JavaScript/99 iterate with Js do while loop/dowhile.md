:coffee:

You can run the same code multiple times by using a loop.

The next type of loop you will learn is called a `"do...while"` loop because it first will `"do"` one pass of the code inside the loop no matter what, and then it runs `"while"` a specified condition is true and stops once that condition is no longer true. Let's look at an example.

```javascript
var ourArray = [];
var i = 0;
do {
  ourArray.push(i);
  i++;
} while (i < 5);
```

This behaves just as you would expect with any other type of loop, and the resulting array will look like `[0, 1, 2, 3, 4]`. However, what makes the `do...while` different from other loops is how it behaves when the condition fails on the first check. Let's see this in action.

Here is a regular while loop that will run the code in the loop as long as i < 5.

```javascript
var ourArray = [];
var i = 5;
while (i < 5) {
  ourArray.push(i);
  i++;
}
```

Notice that we initialize the value of `i` to be `5`. When we execute the next line, we notice that `i` is not less than `5`. So we do not execute the code inside the loop. The result is that `ourArray` will end up with nothing added to it, so it will still look like this `[]` when all the code in the example above finishes running.

Now, take a look at a do...while loop.

```javascript
var ourArray = [];
var i = 5;
do {
  ourArray.push(i);
  i++;
} while (i < 5);
```

In this case, we initialize the value of i as 5, just like we did with the while loop. When we get to the next line, there is no check for the value of i, so we go to the code inside the curly braces and execute it. We will add one element to the array and increment `i` before we get to the condition check. Then, when we get to checking if `i < 5` see that `i` is now `6`, which fails the conditional check. So we exit the loop and are done. At the end of the above example, the value of ourArray is `[5]`.

:star: Essentially, a do...while loop ensures that the code inside the loop will run at least once.

Let's try getting a do...while loop to work by pushing values to an array.

:fire:

Change the `while` loop in the code to a `do...while` loop so that the loop will push the number `10` to `myArray`, and `i` will be equal to `11` when your code finishes running.
