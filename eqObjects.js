//copares arrays
const eqArrays = (arrayOne, arrayTwo) => {
  return JSON.stringify(arrayOne) === JSON.stringify(arrayTwo);
};

//compares objects
const eqObjects = (objectOne, objectTwo) => {
  const keys1 = Object.keys(objectOne);
  const keys2 = Object.keys(objectTwo);
  
  if (keys1.length !== keys2.length) {
    return false;
  } 

  for (let key of keys1) {
    if (Array.isArray(objectOne[key]) && Array.isArray(objectTwo[key])) {
      return eqArrays(objectOne[key], objectTwo[key]);
    } else if (objectOne[key] === objectTwo[key]) {
    } else {
      return false;
    }
  }
  return true;
};


const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const baa = { a: '6', b: '4' };

console.log(eqObjects(ab, ba));
console.log(eqObjects(ab, ab));
console.log(eqObjects(ba, baa));

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(eqObjects(cd, dc)); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(eqObjects(cd, cd2)); // => false

