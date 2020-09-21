// index.js

//functions
const head   = require('./head');
const tail   = require('./tail');
const middle = require('./middle');
const eqArrays = require('./eqArrays');
const countLetters = require('./countLetters');
const countOnly = require('./countOnly');
const eqObject = require('./assertObjectEquals');
const findKey = require('./findKey');

//export function object
module.exports = {
  head:   head,
  tail:   tail,
  middle: middle,
  eqArrays: eqArrays,
  countLetters: countLetters,
  countOnly = countOnly,
  eqObject = eqObject
};


// ** TEST **
console.log(module.exports);