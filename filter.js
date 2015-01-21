/**
 * Create a new array with all elements that pass the test implemented
 * by the provided function.
 * @param {array} array
 * @param {function} callback to test each element of the array.
 *                   Return true to keep the element, false otherwise.
 * @return {array} filtered array
 */
var myFilter = function (array, callback) {
  var results = [];
  for(var index = 0; index < array.length; index++) {
    if (callback(array[index])) {
      results.push(array[index]);
    };
  }
  return results;
};



//----------------------------------------------------------------------
// Below this line is for testing

// Array for testing myFilter against builtinFilter.
var testArray = [74, 22, 8, 84, 9267];

// Function for testing myFilter against builtinFilter.
var testFunc = function (currentValue) {
  return currentValue > 25;
};

// Function that should be equivalent to solution at the top.
var builtinFilter = function (array, callback) {
  var results = array.filter(function (currentValue) {
    return callback(currentValue);
  });
  return results;
};

// Run tests.
console.log('Built-in Map: ', builtinFilter(testArray, testFunc));
console.log();
console.log('Homegrown Map:', myFilter(testArray, testFunc));

