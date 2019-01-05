:coffee:

In JavaScript, String values are _immutable_, which means that they cannot be altered once created.

For example, the following code:

```javascript
var myStr = "Bob";
myStr[0] = "J";
```

cannot change the value of `myStr` to "Job", because the contents of myStr cannot be altered. :zap: Note that this does not mean that myStr cannot be changed, just that the individual characters of a string literal cannot be changed. The only way to change myStr would be to assign it with a new string, like this:

```javascript
var myStr = "Bob";
myStr = "Job";
```

:fire:

Correct the assignment to `myStr` so it contains the string value of `Hello World` using the approach shown in the example above.
