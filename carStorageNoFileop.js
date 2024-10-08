"use strict";

const cars = require("./cars.json");

module.exports = (key, value) => {
  let found = [];
  if (key && value) {
    for (const car of cars) {
      if (car[key] === value) {
        found.push(car);
      }
    }
  }
  else{
    found = cars;
  }
  return found;
};

// Shorter version with the same like previous implementation.
// module.exports = (key, value) => {
//   if (key && value) {
//     const found = [];
//     for (const car of cars) {
//       if (car[key] === value) {
//         found.push(car);
//       }
//     }
//  return found;
// }
// return cars;
// };
