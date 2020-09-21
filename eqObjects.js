//copares arrays
const eqArrays = require('./eqArrays');

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

//export
module.exports = eqObjects;