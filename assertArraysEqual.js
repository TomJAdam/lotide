
//compares arrays
const eqArrays = (arrayOne, arrayTwo) => {
  return JSON.stringify(arrayOne) === JSON.stringify(arrayTwo);
};

//asserts if equal or not using eqArrays
const assertArraysEqual = (arOne, arTwo) => {
  if (eqArrays(arOne, arTwo) === true) {
    console.log(`✅✅✅Assertion Passed`);
  } else if (eqArrays(arOne, arTwo) === false) {
    console.log(`🛑🛑🛑 Assertion Failed`);
  }
};

// ** TEST **
assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, 2, 3], [1, 4, 3]);