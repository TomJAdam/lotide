// *** NOT SOLVED ***

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

  let output = true;

  for (let key of keys1) {
    if (objectOne[key].constructor === Object && objectTwo[key].constructor === Object) {
      eqObjects(objectOne[key], objectTwo[key]);
    } 
    if (Array.isArray(objectOne[key]) && Array.isArray(objectTwo[key])) {
      return eqArrays(objectOne[key], objectTwo[key]);
    } 
    if (objectOne[key] !== objectTwo[key]) {
      output = false;

    } 
    else if (objectOne[key] === objectTwo[key]) {
      console.log('objectOne[key]:', objectOne[key], 'objectTwo[key]:', objectTwo[key]);
      output = true;
    } 
    else {
      output = false;
    }
  }
  return output;
};


const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const baa = { a: '6', b: '4' };

console.log(eqObjects(ab, ba), 'true'); // => true
console.log(eqObjects(ab, ab), 'true'); // => true
console.log(eqObjects(ba, baa), 'false'); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(eqObjects(cd, dc), 'true'); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(eqObjects(cd, cd2), 'false'); // => false

console.log(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), 'true') // => true

console.log(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), 'false') // => false
console.log(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }), 'false') // => false
console.log(eqObjects({a: { a: "1", b: "2" }, b: { a: "1", b: "2" }}, {a: { a: "1", b: "2" }, b: { a: "1", b: "2" }} ), 'true')
