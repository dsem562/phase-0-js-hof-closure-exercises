function forEach(array, callback) {
  array.forEach(callback);
}

function map(array, callback) {
  return newArray = array.map(callback);
}

function filter(array, callback) {
  return newArray = array.filter(callback);
}

function every(array, callback) {
  return booleanValue = array.every(callback);
}

function some(array, callback) {
  return booleanValue = array.some(callback);
}

function majority(array, callback) {  
  const threshold = Math.floor(array.length / 2);  
  let newArray = [];
  for (i = 0; i < array.length; i++) {    
    let evaluation = [i].every(callback);
    if (evaluation === true) {
    newArray.push(array[i]);
    }
  }   
  if (newArray.length > threshold) {
    return true;
  };
  return false;
}

function once(callback) {
  let called = false;
  let result;
  return function (...args) {
    if (called) return result;
    called = true;
    result = callback.apply(this, args);
    return result;
  }
}

function groupBy(array, callback) {

  let key = [];
  let uniqueKeys = [];
  let value = array;
  let objResult = {};
  for (let nums in array) {
    key.push(callback(array[nums]));  
  };
  uniqueKeys = key.filter((k, index) => {
    return key.indexOf(k) === index;
  });
  for (let nums in uniqueKeys) { 
    for(let vNums in value) {
      if (uniqueKeys[nums] === callback(value[vNums])) {
        objResult[uniqueKeys[nums]] = [value[vNums]];
      }
    }
  }
  return objResult;

}

function arrayToObject(array, callback) {
  let objResult = {};
  for (let animals in array) {
    objResult[array[animals]] = callback([array[animals]]);
  }
  return objResult;
}

module.exports = { 
  forEach, 
  map, 
  filter, 
  every, 
  some, 
  majority,
  once,
  groupBy,
  arrayToObject,
};
