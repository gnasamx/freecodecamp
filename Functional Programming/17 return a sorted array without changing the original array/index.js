var globalArray = [5, 6, 3, 2, 9];
function nonMutatingSort(arr) {
  // Add your code below this line
  return arr.concat().sort(function(a, b) {
    if (a < b) return -1;
    else if (a > b) return 1;
    else return 0;
  });

  // Add your code above this line
}
nonMutatingSort(globalArray);
