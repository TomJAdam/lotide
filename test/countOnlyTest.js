// test file for countOnly.js
// test with 'npm test test/countOnlyTest.js'

const assert = require('chai').assert;
const countOnly = require('../countOnly');

// ** TEST **
const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

//test cases
describe("#countOnly", () => {

  it("return true if value of Jason in result object is 1", () => {
    const result = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });;
    assert.deepEqual(result["Jason"], 1);
  });

  it("return true if value Karima is undefined", () => {
    const result = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });;
    assert.deepEqual(result["Karima"], undefined);
  });

  it("return true if value of Fang in result object is 2", () => {
    const result = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });;
    assert.deepEqual(result["Fang"], 2);
  });

});

