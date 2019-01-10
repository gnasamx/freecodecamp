// First method using for loop (Fails for negative number)

// function largestOfFour(arr) {
//   // You can do this!
//   let largestNumber = [0, 0, 0, 0];
//   for (let arrayIndex = 0; arrayIndex < arr.length; arrayIndex++) {
//     for (
//       let subArrayIndex = 0;
//       subArrayIndex < arr[arrayIndex].length;
//       subArrayIndex++
//     ) {
//       if (arr[arrayIndex][subArrayIndex] > largestNumber[arrayIndex]) {
//         largestNumber[arrayIndex] = arr[arrayIndex][subArrayIndex];
//       }
//     }
//   }
//   return largestNumber;
// }

// largestOfFour([
//   [4, 5, 1, 3],
//   [13, 27, 18, 26],
//   [32, 35, 37, 39],
//   [1000, 1001, 857, 1]
// ]);

// Second method using map() and reduce() (Fails for negative number)

// function largestOfFour(mainArray) {
//   return mainArray.map(function(subArray) {
//     return subArray.reduce(function(prevLargestNum, currLargestNum) {
//       return currLargestNum > prevLargestNum ? currLargestNum : prevLargestNum;
//     }, 0);
//   });
// }

/* Map process and Reduce method cycles
      currentLargestNumber => cLN
      previousLargestNumber => pLN
      Iteration in the first array
          For each iteration:     cLN         pLN       if (cLN > pLN) ?        then cLN        else pLN
          First iteration:         4           0        4 > 0? => TRUE              4             /
          Second iteration:        5           4        5 > 4? => TRUE              5             /
          Third iteration:         1           5        1 > 5? => FALSE             /             5
          Fourth iteration:        3           5        3 > 5? => FALSE             /             5
          Fifth iteration:         /           5                                               returns 5
       Exit the first array and continue on the second one       
*/

// Third method using map() and apply()

// Explanation of apply()
// console.log(Math.max(4, 5, 1, 3)); // logs 5

// var num = [4, 5, 1, 3];
// console.log(Math.max(num)); // logs NaN

// var num = [4, 5, 1, 3];
// console.log(Math.max.apply(null, num)); // logs 5

function largestOfFour(mainArray) {
  // Step 1. Map over the main arrays
  return mainArray.map(function(subArray) {
    // Step 3. Return the largest numbers of each sub-arrays => returns [5,27,39,1001]

    // Step 2. Return the largest numbers for each sub-arrays with Math.max() method
    return Math.max.apply(null, subArray);
  });
}

// largestOfFour([
//   [4, 5, 1, 3],
//   [13, 27, 18, 26],
//   [32, 35, 37, 39],
//   [1000, 1001, 857, 1]
// ]);
