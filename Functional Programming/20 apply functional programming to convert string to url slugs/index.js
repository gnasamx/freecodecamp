// the global variable
var globalTitle = "A Mind Needs Books Like A Sword Needs A Whetstone";

// Add your code below this line
function urlSlug(title) {
  let myTitle = title.concat("");
  return myTitle
    .toLowerCase()
    .trim()
    .split(/\s+/)
    .join("-");
}
// Add your code above this line

var winterComing = urlSlug(globalTitle); // Should be "winter-is-coming"
console.log(winterComing);
console.log(globalTitle);
