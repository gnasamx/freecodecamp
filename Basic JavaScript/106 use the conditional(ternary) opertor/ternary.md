:coffee:

The _conditional operator_, also called the _ternary operator_, can be used as a one line if-else expression.

The syntax is:

```javascript
condition ? statement-if-true : statement-if-false;
```

The following function uses an if-else statement to check a condition:

```javascript
function findGreater(a, b) {
  if (a > b) {
    return "a is greater";
  } else {
    return "b is greater";
  }
}
```

This can be re-written using the conditional operator:

```javascript
function findGreater(a, b) {
  return a > b ? "a is greater" : "b is greater";
}
```

:fire:

Use the conditional operator in the `checkEqual` function to check if two numbers are equal or not. The function should return either true or false.
