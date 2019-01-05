:coffee:

It is possible to have both _local_ and _global_ variables with the same name. :zap: When you do this, the local variable takes precedence over the global variable.

In this example:

```javascript
var someVar = "Hat";
function myFun() {
  var someVar = "Head";
  return someVar;
}
```

The function myFun will return "Head" because the local version of the variable is present.

:fire:

Add a local variable to `myOutfit` it function to override the value of `outerWear` with "sweater".
