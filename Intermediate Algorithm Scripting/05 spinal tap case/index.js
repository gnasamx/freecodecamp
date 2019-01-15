function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins
  let regex = /\s+|_+/g;
  str = str.replace(/([a-z])([A-Z])/g, "$1 $2");
  return str.replace(regex, "-").toLowerCase();

  return str;
}

console.log(spinalCase("AllThe-small Things"));
