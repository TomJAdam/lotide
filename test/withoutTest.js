// test file for without.js
// run 'npm test test/withoutTest.js'

//file path
const assert = require('chai').assert;
const without = require('../without');

//test cases
describe("#without", () => {

  it("result true if resulting array is equal to correct output", () => {
    const result = without(["bob", "jack", "mike", "tom"], [1, 2, "3", "jack"]);
    assert.deepEqual(result, ["bob", "mike", "tom"]);
  });

  it("result true if resulting array is equal to correct output", () => {
    const result = without(["1", "2", "3"], [1, 2, "3"]);
    assert.deepEqual(result, ["1", "2"]);
  });

});

