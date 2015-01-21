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
Array.prototype.myReduce = function (callback) {
  var previousValue,
      currentValue;
  for(var index = 1; index < this.length; index++) {
    previousValue = previousValue || this[index - 1];
    currentValue = this[index];
    previousValue = callback(previousValue, currentValue, index, this);
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

// Run tests.
console.log('Built-in Reduce: ', testArray.reduce(testFunc));
console.log();
console.log('Homegrown Reduce:', testArray.myReduce(testFunc));

