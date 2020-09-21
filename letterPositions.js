// Function for letterPositions: returns object with indexes of each letter in sentence

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

//export
module.exports = letterPositions;

