// test file for map.js
// run 'npm test test/mapTest.js'

//file path
const assert = require('chai').assert;
const map = require('../map');

// test array
const words = ["ground", "control", "to", "major", "tom"];

//test cases
describe("#map", () => {

  it("result true if resulting array is equal to correct output", () => {
    const result = map(words, word => word[0]);
    assert.deepEqual(result, [ 'g', 'c', 't', 'm', 't' ]);
  });

  it("result true if resulting object is equal to correct output", () => {
    const result = map(words, word => word.toUpperCase());
    assert.deepEqual(result, ["GROUND", "CONTROL", "TO", "MAJOR", "TOM"]);
  });

});
