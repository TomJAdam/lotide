
//countLetters returns an object with a count of all instences of a letter in a string


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

//export
module.exports = countLetters;

// test file in test/countLettersTest.js