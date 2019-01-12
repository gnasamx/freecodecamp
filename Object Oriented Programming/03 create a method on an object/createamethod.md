:coffee:

_Objects_ can have a special type of `property`, called a `method`.

:zap: Methods are properties that are functions. This adds different behavior to an object. Here is the duck example with a method:

```js
let duck = {
  name: "Aflac",
  numLegs: 2,
  sayName: function() {
    return "The name of this duck is " + duck.name + ".";
  }
};
duck.sayName();
// Returns "The name of this duck is Aflac."
```

The example adds the `sayName` method, which is a function that returns a sentence giving the name of the `duck`.

Notice that the `method` accessed the `name` property in the return statement using `duck.name`. The next challenge will cover another way to do this.

:fire:

Using the `dog` object, give it a method called `sayLegs`. The method should return the sentence `"This dog has 4 legs."`
