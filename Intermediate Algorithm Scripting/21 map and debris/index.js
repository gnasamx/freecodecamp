// function orbitalPeriod(arr) {
//   var GM = 398600.4418;
//   var earthRadius = 6367.4447;

//   //Looping through each key in arr object
//   for (var prop in arr) {
//     //Rounding off the orbital period value
//     var orbitalPer = Math.round(
//       2 * Math.PI * Math.sqrt(Math.pow(arr[prop].avgAlt + earthRadius, 3) / GM)
//     );
//     //deleting the avgAlt property
//     delete arr[prop].avgAlt;
//     //adding orbitalPeriod property
//     arr[prop].orbitalPeriod = orbitalPer;
//   }

//   return arr;
// }

// // test here
// orbitalPeriod([{ name: "sputnik", avgAlt: 35873.5553 }]);

//   Second method

function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;

  // Loop through each item in the array arr
  arr.forEach(function(item) {
    // Calculate the Orbital period value
    var tmp = Math.round(
      2 * Math.PI * Math.sqrt(Math.pow(earthRadius + item.avgAlt, 3) / GM)
    );
    //Delete the avgAlt property
    delete item.avgAlt;
    //Add orbitalPeriod property
    item.orbitalPeriod = tmp;
  });
  return arr;
}

// test here
orbitalPeriod([{ name: "sputnik", avgAlt: 35873.5553 }]);
