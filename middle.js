// Function: mid point of array
const middle = (array) => {
  let outputArray = [];
  let midPoint = Math.floor(array.length / 2);
  
  if (array.length > 2 && array.length % 2 === 0) {
    outputArray.push(array[midPoint - 1]);
    outputArray.push(array[midPoint]);
  } else if (array.length > 2) {
    outputArray.push(array[midPoint]);
  }
  
  return outputArray;
};

module.exports = middle;