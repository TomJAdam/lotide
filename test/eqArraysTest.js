// test file for eqArrays.js

//file path
const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');


//test

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 3], [1, '2', 3]), true);
assertEqual(eqArrays([1, 2, 3, 4], [1, 2, 3]), true);
assertEqual(eqArrays([1, 8, 3], [1, 8, 3]), true);


console.log(eqArrays([[2, 3], [4]], [[2, 3], [4]]), 'true'); // => true
console.log(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]), 'false'); // => false
console.log(eqArrays([[2, 3], [4]], [[2, 3], 4]), 'false'); // => false