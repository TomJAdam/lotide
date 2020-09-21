// test file for letterPositions.js
// run 'npm test test/letterPositionsTest.js'

//file path
const assert = require('chai').assert;
const letterPositions = require('../letterPositions');

// test cases
describe("#letterPositions", () => {

  // 'test test test' 
  it("result true if resulting object is equal to correct output", () => {
    const result = letterPositions('test test test')
    assert.deepEqual(result, { t: [ 0, 3, 5, 8, 10, 13 ], e: [ 1, 6, 11 ], s: [ 2, 7, 12 ] });
  });

  // 'same slams jam'
  it("result true if resulting object is equal to correct output", () => {
    const result = letterPositions('sam slams jam')
    assert.deepEqual(result, { s: [ 0, 4, 8 ],
      a: [ 1, 6, 11 ],
      m: [ 2, 7, 12 ],
      l: [ 5 ],
      j: [ 10 ] });
  });

});


