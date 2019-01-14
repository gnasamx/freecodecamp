function alphabeticalOrder(arr) {
  // Add your code below this line
  return arr.sort(function(a, b) {
    if (a < b) {
      return -1;
    } else if (a > b) {
      return 1;
    } else {
      return 0;
    }
  });
  // Add your code above this line
}
console.log(alphabeticalOrder(["a", "d", "c", "a", "z", "g"]));
