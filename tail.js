// Function to return all elements of an array appart from the head

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: [${actual}] === [${expected}]`);
  } else if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed: [${actual}] !== [${expected}]`);
  }
};

const tail = (array) => {
  let outputArray = [];

  for (let i = 1; i < array.length; i++) {
    outputArray.push(array[i]);
  }
  return outputArray;
};

const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result, ["Lighthouse", "Labs"]); // => will always fail!