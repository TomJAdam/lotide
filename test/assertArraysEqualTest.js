// Test file for assertArraysEqual.js


const assertArraysEqual = require('../assertArraysEqual');


// ** TEST **
assertArraysEqual([1, 2, 3], [1, 2, 3]); // pass
assertArraysEqual([1, 2, 3], [1, 4, 3]); // fail

