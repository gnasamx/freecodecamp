:coffee:

As we have seen in earlier examples, objects can contain both nested objects and nested arrays. Similar to accessing nested objects, Array bracket notation can be chained to access nested arrays.

Here is an example of how to access a nested array:

```javascript
var ourPets = [
  {
    animalType: "cat",
    names: ["Meowzer", "Fluffy", "Kit-Cat"]
  },
  {
    animalType: "dog",
    names: ["Spot", "Bowser", "Frankie"]
  }
];
ourPets[0].names[1]; // "Fluffy"
ourPets[1].names[0]; // "Spot"
```

:fire:

Retrieve the second tree from the variable `myPlants` using object dot and array bracket notation.
