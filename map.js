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
Array.prototype.myMap = function (callback) {
  var results = [],
      currentValue;
  for(var index = 0; index < this.length; index++) {
    currentValue = this[index];
    results.push(callback(currentValue, index, this));
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

// Run tests.
console.log('Built-in Map: ', testArray.map(testFunc));
console.log();
console.log('Homegrown Map:', testArray.myMap(testFunc));

