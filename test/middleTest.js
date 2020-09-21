// Test file for middle.js

const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');


// ** TEST **
const test = middle([1, 2, 3, 4, 5, 6]);
console.log(middle([1, 2, 3, 4,]))  // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6, 7])) // => [4]
console.log(assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4])); // => pass