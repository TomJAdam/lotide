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


// Function:

const letterPositions = (sentence) => {
  let results  = {};

  for (let letter of sentence) {
    if (letter !== ' ') {
      if (!results[letter]) {
        results[letter] = [sentence.indexOf(letter)];
      } else {
        const positions = results[letter];
        const mostRecentPosition = positions[positions.length - 1];
        positions.push(sentence.indexOf(letter, mostRecentPosition + 1));
      }
    }
  } 

  return results;
};

console.log(letterPositions('test test test'));
console.log(assertArraysEqual(letterPositions('test test test'), { t: [ 0, 3, 5, 8, 10, 13 ], e: [ 1, 6, 11 ], s: [ 2, 7, 12 ] }));

  /*
  {
    t: [0],
    e: [1],
    s: [2]
  }
  results[t] = [0]
  ....
  results[t] = [0, 5, 9]
  results[t].length = 3
  lastIndexOfArray = results[...].length - 1
  */