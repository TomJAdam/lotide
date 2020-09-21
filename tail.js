// Function to return all elements of an array appart from the head


const tail = (array) => {
  let outputArray = [];

  for (let i = 1; i < array.length; i++) {
    outputArray.push(array[i]);
  }
  return outputArray;
};

module.exports = tail;