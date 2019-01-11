function titleCase(str) {
  let strSplit = str.split(" ");
  console.log(strSplit);
  strSplit = strSplit.map(function(ele) {
    return ele[0].toUpperCase() + ele.substr(1).toLowerCase();
  });
  //   console.log(strSplit.join(" "));

  return strSplit.join(" ");
}

titleCase("I'm a little tea pot");

// Second method using slice()

// function titleCase(str) {
//   str = str.toLowerCase().split(" ");
//   for (var i = 0; i < str.length; i++) {
//     str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
//   }
//   return str.join(" ");
// }
// titleCase("I'm a little tea pot");

// Third method using map()

// function titleCase(str) {
//   return str
//     .toLowerCase()
//     .split(" ")
//     .map(function(word) {
//       return
//     })
//     .join(" ");
// }
// titleCase("I'm a little tea pot");

// Fourth method using map() and replace()

// function titleCase(str) {
//   return str
//     .toLowerCase()
//     .split(" ")
//     .map(function(word) {
//       return word.replace(word[0], word[0].toUpperCase());
//     })
//     .join(" ");
// }
// titleCase("I'm a little tea pot");
