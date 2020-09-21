// Function: countOnly
// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count

const countOnly = (allItems, itemsToCount) => {
  const results = {};

  for (const item of allItems) {
    if (itemsToCount[item]) {
      if (results[item]) {
        results[item] += 1;
      } else {
        results[item] = 1;
      }
      console.log(item);
    }
  }

  return results;
};

//export
module.exports = countOnly;

