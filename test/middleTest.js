// Test file for middle.js

//function imports
const assert = require('chai').assert;
const middle = require('../middle');

//test cases
describe("#tail", () => {

  it("result = [3, 4]", () => {
    const result = middle([1, 2, 3, 4, 5, 6]);
    assert.deepEqual(result, [3, 4]);
  });

  it("result = [4]", () => {
    const result = middle([1, 2, 3, 4, 5, 6, 7]);
    assert.deepEqual(result, [4]);
  });

});
