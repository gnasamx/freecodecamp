function Dog(name) {
  this.name = name;
}

Dog.prototype = {
  // Add your code below this line
  numLegs: 4,
  eat: function() {
    console.log("woof woof");
  },
  describe: function() {
    console.log(`My name is ${this.name}`);
  }
};

let tom = new Dog("Tom");

console.log(tom);
console.log(tom.numLegs);
console.log(tom.eat());
console.log(tom.describe());
