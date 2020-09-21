// test file for eqArrays.js

//file path
const assert = require('chai').assert;
const eqArrays = require('../eqArrays');


//test cases

describe("#eqArrays", () => {

  it("result true if arrays are the same", () => {
    const result = eqArrays([1, 2, 3], [1, 2, 3]);
    assert.deepEqual(result, true);
  });

  it("result true if arrays are the same", () => {
    const result = eqArrays([1, 2, 3, 'bob'], [1, 2, 3, 'bob']);
    assert.deepEqual(result, true);
  });

});

