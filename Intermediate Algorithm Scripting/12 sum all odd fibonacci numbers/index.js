// function sumFibs(num) {
//   let first = 1;
//   let second = 1;

//   let fibooArr = [];
//   let temp = 0;
//   while (temp < num) {
//     fibooArr.push(first);
//     temp = first + second;
//     first = second;
//     second = temp;
//   }
//   console.log(fibooArr);
//   console.log(fibooArr.filter(n => n % 2 === 0));
//   return fibooArr.filter(n => n % 2 != 0).reduce((a, b) => a + b);
// }

// console.log(sumFibs(1000));

function sumFibs(num) {
  var prevNumber = 0;
  var currNumber = 1;
  var result = 0;
  while (currNumber <= num) {
    if (currNumber % 2 !== 0) {
      result += currNumber;
    }

    currNumber += prevNumber;
    prevNumber = currNumber - prevNumber;
  }

  return result;
}

// test here
sumFibs(4);
