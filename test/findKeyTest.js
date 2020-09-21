// test file for findKey.js
// run 'npm test test/findKeyTest.js'

//file path
const assert = require('chai').assert;
const findKey = require('../findKey');

// test cases

describe("#findKey", () => {

  it("result true if result returns noma", () => {
    const result = findKey({
      "Blue Hill": { stars: 1 },
      "Akaleri":   { stars: 3 },
      "noma":      { stars: 2 },
      "elBulli":   { stars: 3 },
      "Ora":       { stars: 2 },
      "Akelarre":  { stars: 3 }
    }, x => x.stars === 2);
    assert.deepEqual(result, 'noma');
  });

  it("result true if result returns Akaleri", () => {
    const result = findKey({
      "Blue Hill": { stars: 1 },
      "Akaleri":   { stars: 3 },
      "noma":      { stars: 2 },
      "elBulli":   { stars: 3 },
      "Ora":       { stars: 2 },
      "Akelarre":  { stars: 3 }
    }, x => x.stars === 3);
    assert.deepEqual(result, 'Akaleri');
  });

  it("result true if result returns Ora", () => {
    const result = findKey({
      "Blue Hill": { stars: 1 },
      "Akaleri":   { stars: 3 },
      "noma":      { stars: 2 },
      "elBulli":   { stars: 3 },
      "Ora":       { stars: 4 },
      "Akelarre":  { stars: 3 }
    }, x => x.stars === 4);
    assert.deepEqual(result, 'Ora');
  });

});

