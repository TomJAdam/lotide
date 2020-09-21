// index.js

//functions
const head   = require('./head');
const tail   = require('./tail');
const middle = require('./middle');
const eqArrays = require('./eqArrays');
const countLetters = require('./countLetters');
const countOnly = require('./countOnly');
const eqObject = require('./eqObjects');
const findKey = require('./findKey');
const flatten = require('./flatten');
const letterPositions = require('./letterPositions');
const map = require('./map');
const takeUntil = require('./takeUntil');
const without = require('./without');

//export function object
module.exports = {
  head,
  tail,
  middle,
  eqArrays,
  countLetters,
  countOnly,
  eqObject,
  findKey,
  flatten,
  letterPositions,
  map,
  takeUntil,
  without
};


// ** TEST **
console.log(module.exports);

