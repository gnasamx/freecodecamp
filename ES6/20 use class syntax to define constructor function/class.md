:coffee:

ES6 provides a new syntax to help create objects, using the keyword class.

This is to be noted, that the `class` syntax is just a syntax, and not a full-fledged class based implementation of object oriented paradigm, unlike in languages like Java, or Python, or Ruby etc.

In ES5, we usually define a constructor function, and use the new keyword to instantiate an object.

```js
var SpaceShuttle = function(targetPlanet) {
  this.targetPlanet = targetPlanet;
};
var zeus = new SpaceShuttle("Jupiter");
```

The class syntax simply replaces the constructor function creation:

```js
class SpaceShuttle {
  constructor(targetPlanet) {
    this.targetPlanet = targetPlanet;
  }
}
const zeus = new SpaceShuttle("Jupiter");
```

Notice that the `class` keyword declares a new function, and a constructor was added, which would be invoked when `new` is called - to create a new object.

:fire:

Use `class` keyword and write a proper constructor to create the `Vegetable` class.

The `Vegetable` lets you create a vegetable object, with a property `name`, to be passed to constructor.
