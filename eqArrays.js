

// takes in two arrays and returns tru or false based on a perfect match
const eqArrays = (arrayOne, arrayTwo) => {
  return JSON.stringify(arrayOne) === JSON.stringify(arrayTwo);
};

module.exports = eqArrays;