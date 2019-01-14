function sumAll(arr) {
  let min = Math.min(...arr);
  let max = Math.max(...arr);
  console.log(min);
  console.log(max);

  let tempArr = [];
  for (let i = min; i <= max; i++) {
    tempArr.push(i);
  }
  console.log(tempArr);
  return tempArr.reduce((a, b) => a + b);
}

console.log(sumAll([1, 4]));
