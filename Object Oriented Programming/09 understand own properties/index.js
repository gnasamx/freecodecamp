function Bird(name) {
    this.name = name;
    this.numLegs = 2;
  }
  
  let canary = new Bird("Tweety");
  let ownProps = [];
  // Add your code below this line
  
  
for(let property in canary) {
    if(canary.hasOwnProperty(property)) {
        ownProps.push(property);
    }
}  

console.log(ownProps);