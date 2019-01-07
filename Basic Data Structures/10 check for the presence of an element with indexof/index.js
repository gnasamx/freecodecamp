function quickCheck(arr, elem) {
  // change code below this line
  let index = arr.indexOf(elem);
  if (index >= 0) return true;
  else return false;
  // change code above this line
}

// change code here to test different cases:
console.log(quickCheck(["squash", "onions", "shallots"], "mushrooms"));
