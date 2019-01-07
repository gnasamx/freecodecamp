let ohStr = "Ohhh no";
let ohRegex = /Oh{3,5}\sno/; // Change this line
let result = ohRegex.test(ohStr);
console.log(result);
