function Dog(name) {
  this.name = name;
}

// Modify the code below this line
Dog.prototype = {
  constructor: Dog,
  numLegs: 2,
  eat: function() {
    console.log("nom nom nom");
  },
  describe: function() {
    console.log("My name is " + this.name);
  }
};

let dog = new Dog("Jordan");
console.log(dog.constructor());
console.log(dog.numLegs);
console.log(dog.eat());
console.log(dog.describe());
console.log(dog.name);
