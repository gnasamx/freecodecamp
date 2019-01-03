:coffee:

You may have heard the term `object` before.

Objects are similar to `arrays`, except that instead of using indexes to access and modify their data, you access the data in objects through what are called _properties_.

Objects are useful for storing data in a structured way, and can represent real world objects, like a cat.

Here's a sample cat object:

```javascript
var cat = {
  name: "Whiskers",
  legs: 4,
  tails: 1,
  enemies: ["Water", "Dogs"]
};
```

In this example, all the properties are stored as strings, such as - `"name"`, `"legs", and`"tails"`. However, you can also use numbers as properties. You can even omit the quotes for single-word string properties, as follows:

```javascript
var anotherObject = {
  make: "Ford",
  5: "five",
  model: "focus"
};
```

However, if your object has any non-string properties, JavaScript will automatically typecast them as strings.

:fire:

Make an object that represents a dog called `myDog` which contains the properties `"name"` (a string), `"legs"`, `"tails"` and `"friends"`.

You can set these object properties to whatever values you want, as long `"name"` is a string, `"legs"` and `"tails"` are numbers, and `"friends"` is an array.
