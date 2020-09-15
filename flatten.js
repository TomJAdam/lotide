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

//Fucntion: to flatten an array
const flatten = (array) => {
  flatArray = [];

  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i]) === false) {
      flatArray.push(array[i]);
    } else if (Array.isArray(array[i]) === true) {
      for (let j = 0; j < array[i].length; j++) {
        flatArray.push(array[i][j]);
      }
    }
  }
return flatArray;
};

console.log(flatten([1, 2, [3, 4], 5, [6]]))
console.log(assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [ 1, 2, 3, 4, 5, 6 ]));