/**
 * Apply a function against an accumulator where each value of the array
 * is reduced to a single value.
 * @param {array} array
 * @param {function} callback taking four arguments:
 *    - previousValue - value previously returned in the last invovcation
 *                      of the callback
 *    - currentValue  - current element being processed in the array
 *    - index         - index of current element being processed in the array
 *    - array         - array reduce was called upon
 * @return {type depends on array elements} accumulated value
 */
var myReduce = function (array, callback) {
  var previousValue,
      currentValue;
  for(var index = 1; index < array.length; index++) {
    previousValue = previousValue || array[index - 1];
    currentValue = array[index];
    previousValue = callback(previousValue, currentValue, index, array);
  }
  return previousValue;
};



//----------------------------------------------------------------------
// Below this line is for testing

// Array for testing myReduce against builtinReduce.
var testArray = ['a', 'b', 'c', 'd'];

// Function for testing myReduce against builtinReduce.
var testFunc = function (previousValue, currentValue, index, array) {
    return previousValue + currentValue;
};

// Function that should be equivalent to solution at the top.
var builtinReduce = function (array, callback) {
  var results = array.reduce(function (previousValue, currentValue, index, array) {
    return callback(previousValue, currentValue, index, array);
  });
  return results;
};

// Run tests.
console.log('Built-in Reduce: ', builtinReduce(testArray, testFunc));
console.log();
console.log('Homegrown Reduce:', myReduce(testArray, testFunc));

