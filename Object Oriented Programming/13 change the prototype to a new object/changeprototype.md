:coffee: :star: :black_heart:

Up until now you have been adding properties to the prototype individually:

```js
Bird.prototype.numLegs = 2;
```

This becomes tedious after more than a few properties.

```js
Bird.prototype.eat = function() {
  console.log("nom nom nom");
};

Bird.prototype.describe = function() {
  console.log("My name is " + this.name);
};
```

A more efficient way is to set the prototype to a new object that already contains the properties. This way, the properties are added all at once:

```js
Bird.prototype = {
  numLegs: 2,
  eat: function() {
    console.log("nom nom nom");
  },
  describe: function() {
    console.log("My name is " + this.name);
  }
};
```

:fire:

Add the property `numLegs` and the two methods `eat()` and `describe()` to the prototype of `Dog` by setting the prototype to a new object.
