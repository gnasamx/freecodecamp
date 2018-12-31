:coffee:

If you have many options to choose from, a `switch` statement can be easier to write than many chained `if/else if` statements. The following:

```javascript
if (val === 1) {
  answer = "a";
} else if (val === 2) {
  answer = "b";
} else {
  answer = "c";
}
```

can be replaced with:

```javascript
switch (val) {
  case 1:
    answer = "a";
    break;
  case 2:
    answer = "b";
    break;
  default:
    answer = "c";
}
```

:fire:

Change the chained `if/else if` statements into a `switch` statement.
