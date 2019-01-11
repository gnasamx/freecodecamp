function repeatStringNumTimes(str, num) {
  // repeat after me
  let repeatedString = "";
  if (num < 0) {
    return "";
  } else {
    while (num > 0) {
      repeatedString += str;
      num--;
    }
  }
  return repeatedString;
}

repeatStringNumTimes("abcd", 2);

// Second method using repeat()

// function repeatStringNumTimes(string, num) {
//   if (num < 0) {
//     return "";
//   } else {
//     return string.repeat(num);
//   }
// }

// console.log(repeatStringNumTimes("abc", 4));
