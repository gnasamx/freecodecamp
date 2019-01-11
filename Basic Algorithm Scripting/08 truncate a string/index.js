function truncateString(str, num) {
  // Clear out that junk in your trunk
  let truncate;
  if (str.length > num) {
    truncate = str.substr(0, num);
  } else {
    return str;
  }

  return truncate + "...";
}

truncateString("Absolutely Longer", 2);

// Second method using slice

// function truncateString(str, num) {
//   // Clear out that junk in your trunk
//   if (str.length > num && num > 3) {
//     return str.slice(0, num - 3) + "...";
//   } else if (str.length > num && num <= 3) {
//     return str.slice(0, num) + "...";
//   } else {
//     return str;
//   }
// }

// console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));
