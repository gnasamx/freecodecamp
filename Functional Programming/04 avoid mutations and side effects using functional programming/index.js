// the global variable
var fixedValue = 4;

function incrementer() {
  // Add your code below this line
  console.log(fixedValue);
  return fixedValue + 1;

  // Add your code above this line
}

var newValue = incrementer(); // Should equal 5
console.log(newValue);
console.log(fixedValue); // Should print 4
