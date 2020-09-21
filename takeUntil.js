// Take until function, takes array prints untill call back is called

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


