
//Fucntion: to flatten an array
const flatten = (array) => {
  let flatArray = [];

  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i]) === false) {
      flatArray.push(array[i]);
    } else if (Array.isArray(array[i]) === true) {
      for (let j = 0; j < array[i].length; j++) {
        flatArray.push(array[i][j]);
      }
    }
  }
  return flatArray;
};

//export
module.exports = flatten;

