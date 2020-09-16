//copares arrays
const eqArrays = (arrayOne, arrayTwo) => {
  return JSON.stringify(arrayOne) === JSON.stringify(arrayTwo);
};

//compares objects
const eqObjects = (objectOne, objectTwo) => {
  const keys1 = Object.keys(objectOne);
  const keys2 = Object.keys(objectTwo);
  
  if (keys1.length !== keys2.length) {
    return false;
  } 

  for (let key of keys1) {
    if (Array.isArray(objectOne[key]) && Array.isArray(objectTwo[key])) {
      return eqArrays(objectOne[key], objectTwo[key]);
    } else if (objectOne[key] === objectTwo[key]) {
    } else {
      return false;
    }
  }
  return true;
};

//assertion
const assertObjectsEqual = (actual, expected) => {
  const inspect = require('util').inspect;
  const compare = eqObjects(actual, expected);
  if (compare === true) {
    return `✅✅✅Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`;
  } else if (compare === false) {
    return `🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`;
  }
};

// ** TEST **
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1", a: '2' };

console.log(assertObjectsEqual(cd, cd));
console.log(assertObjectsEqual(cd, dc));
