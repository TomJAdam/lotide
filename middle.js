//compares arrays
// const eqArrays = (arrayOne, arrayTwo) => {
//   return JSON.stringify(arrayOne) === JSON.stringify(arrayTwo);
// };

// //asserts if equal or not using eqArrays
// const assertArraysEqual = (arOne, arTwo) => {
//   if (eqArrays(arOne, arTwo) === true) {
//     return `✅✅✅Assertion Passed: [${arOne}] === [${arTwo}]`;
//   } else if (eqArrays(arOne, arTwo) === false) {
//     return `🛑🛑🛑 Assertion Failed: [${arOne}] !== [${arTwo}]`;
//   }
// };

// Function: mid point of array
const middle = (array) => {
  let outputArray = [];
  let midPoint = Math.floor(array.length / 2);
  
  if (array.length > 2 && array.length % 2 === 0) {
    outputArray.push(array[midPoint - 1]);
    outputArray.push(array[midPoint]);
  } else if (array.length > 2) {
    outputArray.push(array[midPoint]);
  }
  
  return outputArray;
};

module.exports = middle;