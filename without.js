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



const without = (array, remove) => {
  // outputArray = array.filter(val => !remove.includes(val));
  let outputArray = [];

  for (let ar of array) {
    let match = true;
    for (let rem of remove) {
      if (ar !== rem) {
        match = false;
      } else {
        match = true;
      }
    }
    if (match === false) {
      outputArray.push(ar);
    }
  }
  return outputArray;
};


console.log(without([1, 2, 3], [1]));
console.log(without(["1", "2", "3"], [1, 2, "3"]));
console.log(without(["bob", "jack", "mike", "tom"], [1, 2, "3", "jack"]));

console.log(assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]));