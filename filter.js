/**
 * Create a new array with all elements that pass the test implemented
 * by the provided function.
 * @param {array} array
 * @param {function} callback to test each element of the array.
 *                   Return true to keep the element, false otherwise.
 * @return {array} filtered array
 */
Array.prototype.myFilter = function (callback) {
  var results = [];
  for(var index = 0; index < this.length; index++) {
    if (callback(this[index])) {
      results.push(this[index]);
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

// Run tests.
console.log('Built-in Map: ', testArray.filter(testFunc));
console.log();
console.log('Homegrown Map:', testArray.myFilter(testFunc));

