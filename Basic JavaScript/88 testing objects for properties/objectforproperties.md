:coffee: :star:

Sometimes it is useful to check if the property of a given object exists or not. We can use the `.hasOwnProperty(propname)` method of objects to determine if that object has the given property name. :zap: `.hasOwnProperty()` returns true or false if the property is found or not.

Example

```javascript
var myObj = {
  top: "hat",
  bottom: "pants"
};
myObj.hasOwnProperty("top"); // true
myObj.hasOwnProperty("middle"); // false
```

:fire:

Modify the function `checkObj` to test `myObj` for `checkProp`. If the property is found, return that property's value. If not, return `"Not Found"`.
