function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  let falsyArr = [0, "", NaN, undefined, false, null];
  return arr.filter(ele => !falsyArr.includes(ele));
}

console.log(bouncer([7, "ate", "", false, 9, 0]));
