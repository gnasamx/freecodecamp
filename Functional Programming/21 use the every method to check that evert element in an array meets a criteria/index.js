function checkPositive(arr) {
  // Add your code below this line

  return arr.every(function(a) {
    return a > 0;
  });
  // Add your code above this line
}
checkPositive([1, 2, 3, -4, 5]);
