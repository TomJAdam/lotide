// Test file for countLetters.js

// import 
const assert = require('chai').assert;
const countLetters = require('../countLetters');


//test cases
describe("#countLetters", () => {

  it("result = { t: 6, e: 3, s: 3 }", () => {
    const result = countLetters('test test test');
    assert.deepEqual(result, { t: 6, e: 3, s: 3 });
  });

  it("result = { t: 6, e: 3, s: 3 }", () => {
    const result = countLetters('test test test test');
    assert.deepEqual(result, { t: 8, e: 4, s: 4 });
  });

});
