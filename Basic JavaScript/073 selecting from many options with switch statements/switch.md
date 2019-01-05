:coffee:

If you have many options to choose from, use a `switch` statement. A switch statement tests a value and can have many `case` statements which define various possible values. Statements are executed from the first matched case value until a `break` is encountered.

Here is a _pseudo code_ example:

```javascript
switch(num) {
  case value1:
    statement1;
    break;
  case value2:
    statement2;
    break;
...
  case valueN:
    statementN;
    break;
}
```

`case` values are tested with strict equality (`===`). The break tells JavaScript to stop executing statements. If the break is omitted, the next statement will be executed.

:fire:

Write a switch statement which tests `val` and sets `answer` for the following conditions:
`1` - "alpha"
`2` - "beta"
`3` - "gamma"
`4` - "delta"
