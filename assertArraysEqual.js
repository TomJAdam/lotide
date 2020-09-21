//eq arrays
const eqArrays = require('./eqArrays');

//asserts if equal or not using eqArrays
const assertArraysEqual = (arOne, arTwo) => {
  if (eqArrays(arOne, arTwo) === true) {
    console.log(`✅✅✅Assertion Passed`);
  } else if (eqArrays(arOne, arTwo) === false) {
    console.log(`🛑🛑🛑 Assertion Failed`);
  }
};

//export
module.exports = assertArraysEqual;

// Test files in test/assertArraysEqualTest.js
