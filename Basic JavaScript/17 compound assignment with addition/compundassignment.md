:coffee:

In programming, it is common to use assignments to modify the contents of a variable. Remember that everything to the right of the equals sign is evaluated first, so we can say:

```javascript
myVar = myVar + 5;
```

to add `5 to`myVar`. Since this is such a common pattern, there are operators which do both a mathematical operation and assignment in one step.

One such operator is the += operator.

```javascript
var myVar = 1;
myVar += 5;
console.log(myVar); // Returns 6
```

:fire:

Convert the assignments for `a`, `b`, and `c` to use the `+=` operator.
