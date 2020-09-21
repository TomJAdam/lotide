// test file for assertObjectsEquals.js
// test with 'npm test test/assertObjectEqualsTest.js'

const assert = require('chai').assert;
const eqObjects = require('../assertObjectEquals');

// ** TEST **
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1", a: '2' };


//test cases
describe("#eqObjects", () => {

  it("return true if objectA === objectB", () => {
    const result = eqObjects(cd, cd)
    assert.deepEqual(result, true);
  });

  it("return false if objectA !== objectB", () => {
    const result = eqObjects(cd, dc)
    assert.deepEqual(result, false);
  });

});


