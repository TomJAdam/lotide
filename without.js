// function without: to compare arrays and print elements in first array that do not appear in second

const without = (array, remove) => {
  let outputArray = [];

  for (let ar of array) {
    let match = false;
    for (let rem of remove) {
      if (ar === rem) {
        match = true;
      }
    }
    if (match === false) {
      outputArray.push(ar);
    }
  }
  return outputArray;
};

//export
module.exports = without;


