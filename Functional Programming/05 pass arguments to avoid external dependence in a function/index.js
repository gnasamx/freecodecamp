// the global variable
var fixedValue = 4;

// Add your code below this line
function incrementer(val) {
  console.log(fixedValue === val++);
  let newVal = val + 1;
  console.log(fixedValue === newVal);
  return val + 1;
  // Add your code above this line
}

var newValue = incrementer(fixedValue); // Should equal 5
console.log(newValue);
console.log(fixedValue); // Should print 4
