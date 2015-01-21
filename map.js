/**
 * Create a new array with the results of calling a provided function
 * on every element in this array.
 * @param {array} array
 * @param {function} callback taking three arguments:
 *    - currentValue  - current element being processed in the array
 *    - index         - index of current element being processed in the array
 *    - array         - array map was called upon
 * @return {array} mapped array
 */
var myMap = function (array, callback) {
  var results = [],
      currentValue;
  for(var index = 0; index < array.length; index++) {
    currentValue = array[index];
    results.push(callback(currentValue, index, array));
  }
  return results;
};



//----------------------------------------------------------------------
// Below this line is for testing

// Array for testing myMap against builtinMap.
var testArray = ['a', 'b', 'c', 'd'];

// Function for testing myMap against builtinMap.
var testFunc = function (currentValue, index, array) {
  return currentValue + '1';
};

// Function that should be equivalent to solution at the top.
var builtinMap = function (array, callback) {
  var results = array.map(function (currentValue, index, array) {
    return callback(currentValue, index, array);
  });
  return results;
};

// Run tests.
console.log('Built-in Map: ', builtinMap(testArray, testFunc));
console.log();
console.log('Homegrown Map:', myMap(testArray, testFunc));

