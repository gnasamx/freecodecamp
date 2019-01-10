// First method using endsWith()

// function confirmEnding(str, target) {
//   // "Never give up and good luck will find you."
//   // -- Falcor
//   console.log(str.endsWith(target));
//   return str.endsWith(target);
// }

// confirmEnding("Bastian", "n");

// Second method split()

// console.log(str.substr(-2)); // la

function confirmEnding(string, target) {
  if (string.substr(-target.length) === target) {
    return true;
  } else {
    return false;
  }
}
