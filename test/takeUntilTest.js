// test file for takeUntil.js
// run 'npm test test/takeUntilTest.js'

//file path
const assert = require('chai').assert;
const takeUntil = require('../takeUntil');

//test cases
describe("#takeUntil", () => {

  it("result true if resulting array is equal to correct output", () => {
    const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
    const result = takeUntil(data1, x => x < 0);
    assert.deepEqual(result, [1, 2, 5, 7, 2]);
  });

  it("result true if resulting array is equal to correct output", () => {
    const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
    const result = takeUntil(data2, x => x === ',');
    assert.deepEqual(result, ["I've", "been", "to", "Hollywood"]);
  });
});
