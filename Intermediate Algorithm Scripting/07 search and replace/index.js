function myReplace(str, before, after) {
  const strArr = str.split(" ");
  let index = null;
  strArr.includes(before) ? (index = strArr.indexOf(before)) : null;
  console.log(index);

  str[index] === str[index].toUpperCase()
    ? (after = after.charAt(0).toUpperCase() + after.slice(1))
    : null;

  str = str.replace(before, after);
  return str;
}

console.log(
  //   myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped")
  myReplace("His name is Tom", "Tom", "john")
);
