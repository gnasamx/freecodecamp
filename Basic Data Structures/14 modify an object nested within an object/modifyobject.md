:coffee:

Now let's take a look at a slightly more complex object. Object properties can be nested to an arbitrary depth, and their values can be any type of data supported by JavaScript, including arrays and even other objects. Consider the following:

```js
let nestedObject = {
  id: 28802695164,
  date: "December 31, 2016",
  data: {
    totalUsers: 99,
    online: 80,
    onlineStatus: {
      active: 67,
      away: 13
    }
  }
};
```

`nestedObject` has three unique keys: `id`, whose value is a number, `date` whose value is a string, and `data`, whose value is an object which has yet another object nested within it. While structures can quickly become complex, we can still use the same notations to access the information we need.

:fire:

Here we've defined an object, `userActivity`, which includes another object nested within it. You can modify properties on this nested object in the same way you modified properties in the last challenge. Set the value of the `online` key to `45`.
