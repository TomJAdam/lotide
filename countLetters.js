//compares arrays
const eqArrays = (arrayOne, arrayTwo) => {
  return JSON.stringify(arrayOne) === JSON.stringify(arrayTwo);
};

//asserts if equal or not using eqArrays
const assertArraysEqual = (arOne, arTwo) => {
  if (eqArrays(arOne, arTwo) === true) {
    return `✅✅✅Assertion Passed: [${arOne}] === [${arTwo}]`;
  } else if (eqArrays(arOne, arTwo) === false) {
    return `🛑🛑🛑 Assertion Failed: [${arOne}] !== [${arTwo}]`;
  }
};

const countLetters = (stringToCount) => {
  let outputObj = {};
  let noSpaces = stringToCount.replace(/ /g, '');

  for (let letter of noSpaces) {
    if (!outputObj[letter]) {
      outputObj[letter] = 1;
    } else if (outputObj[letter]) {
      outputObj[letter] += 1;
    }
    
  }
  return outputObj;
};

console.log(countLetters('test test test'));
console.log(assertArraysEqual(countLetters('test test test'), { t: 6, e: 3, s: 3 }));
