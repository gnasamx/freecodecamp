function translatePigLatin(str) {
  let pigLatin = "";
  let regex = /[aeiou]/gi;
  if (str[0].match(regex)) {
    pigLatin = str + "way";
  } else if (str.match(regex) === null) {
    pigLatin = str + "ay";
  } else {
    console.log(str.match(regex)[0]);
    let vowelIndex = str.indexOf(str.match(regex)[0]);
    pigLatin = str.substr(vowelIndex) + str.substr(0, vowelIndex) + "ay";
  }
  return pigLatin;
}

function isVowel(l) {
  return l === "a" || l === "e" || l === "i" || l === "o" || l === "u";
}

translatePigLatin("consonant");
