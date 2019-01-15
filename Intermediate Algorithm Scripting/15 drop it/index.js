// function dropElements(arr, func) {
//   let dropItArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
//     func(arr[i]) ? null : dropItArr.push(arr[i]);
//   }
//   // Drop them elements.
//   return dropItArr;
// }

// console.log(
//   dropElements([1, 2, 3, 9, 2], function(n) {
//     return n > 2;
//   })
// );

function dropElements(arr, func) {
  return arr.slice(
    arr.findIndex(func) >= 0 ? arr.findIndex(func) : arr.length,
    arr.length
  );
}

// test here
console.log(
  dropElements([1, 2, 3, 4], function(n) {
    return n >= 3;
  })
);
