// Map function - takes 2 arguments, array to map, callback function


const map = (array, callback) => {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

//export
module.exports = map;

