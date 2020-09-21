// Take until function, takes array and returns new array untill call back is satisfied 

const takeUntil = (array, callback) => {
  const results = [];
  for (let item of array) {
    if (!callback(item))
      results.push(item);
    if (callback(item)) {
      break;
    }
  }
  return results;
};

//export
module.exports = takeUntil;


