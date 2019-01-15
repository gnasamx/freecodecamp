function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
  // Only change code below this line
  const sourceKeys = Object.keys(source);
  console.log(sourceKeys);
  return collection.filter(function(item) {
    return sourceKeys.every(function(k) {
      return item[k] === source[k];
    });
  });

  // Only change code above this line
  return arr;
}

console.log(
  whatIsInAName(
    [
      { apple: 1, bat: 2 },
      { apple: 1 },
      { apple: 1, bat: 2, cookie: 2 },
      { bat: 2 }
    ],
    { apple: 1, bat: 2 }
  )
);
