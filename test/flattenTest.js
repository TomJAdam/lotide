// test file for flatten.js
// run 'npm test test/flattenTest.js'

//file path
const assert = require('chai').assert;
const flatten = require('../flatten');

// test cases

describe("#findKey", () => {

  it("result true if resulting array from flatten is equal to array", () => {
    const result = flatten([1, 2, [3, 4], 5, [6]])
    assert.deepEqual(result, [ 1, 2, 3, 4, 5, 6 ]);
  });

  it("result true if resulting array from flatten is equal to array", () => {
    const result = flatten([1, 2, [3, 4], 5, [6], ['bob']])
    assert.deepEqual(result, [ 1, 2, 3, 4, 5, 6, 'bob' ]);
  });

});


