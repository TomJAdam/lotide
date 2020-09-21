// find key function, returns first key where argument is a match to value


const findKey = (object, callback) => {
  let result = undefined;
  for (let obj in object) {
    if(callback(object[obj])) {
      result = obj;
      break;
    } 
  }
  return result;
};

module.exports = findKey;

