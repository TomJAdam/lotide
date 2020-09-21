const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: [${actual}] === [${expected}]`);
  } else if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed: [${actual}] !== [${expected}]`);
  }
};

// takes in two arrays and returns tru or false based on a perfect match
const eqArrays = (arrayOne, arrayTwo) => {
  return JSON.stringify(arrayOne) === JSON.stringify(arrayTwo);
};

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 3], [1, '2', 3]), true);
assertEqual(eqArrays([1, 2, 3, 4], [1, 2, 3]), true);
assertEqual(eqArrays([1, 8, 3], [1, 8, 3]), true);


console.log(eqArrays([[2, 3], [4]], [[2, 3], [4]]), 'true'); // => true

console.log(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]), 'false') // => false
console.log(eqArrays([[2, 3], [4]], [[2, 3], 4]), 'false'); // => false