:coffee:

In previous lessons, you learned that an object can inherit its behavior (methods) from another object by cloning its prototype object:

```js
ChildObject.prototype = Object.create(ParentObject.prototype);
```

Then the ChildObject received its own methods by chaining them onto its prototype:

```js
ChildObject.prototype.methodName = function() {...};
```

It's possible to override an inherited method. It's done the same way - by adding a method to `ChildObject.prototype` using the same method name as the one to override.

Here's an example of `Bird` overriding the `eat()` method inherited from Animal:

```js
function Animal() {}
Animal.prototype.eat = function() {
  return "nom nom nom";
};
function Bird() {}

// Inherit all methods from Animal
Bird.prototype = Object.create(Animal.prototype);

// Bird.eat() overrides Animal.eat()
Bird.prototype.eat = function() {
  return "peck peck peck";
};
```

If you have an instance `let duck = new Bird();` and you call `duck.eat()`, this is how JavaScript looks for the method on duck’s prototype chain:

1. duck => Is eat() defined here? No.

2. Bird => Is eat() defined here? => Yes. Execute it and stop searching.

3. Animal => eat() is also defined, but JavaScript stopped searching before reaching this level.

4. Object => JavaScript stopped searching before reaching this level.

:fire:

Override the `fly()` method for `Penguin` so that it returns "Alas, this is a flightless bird."
