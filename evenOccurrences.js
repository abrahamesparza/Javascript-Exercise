/*
 * Find the first item that occurs an even number of times in an array.
 * Remember to handle multiple even-occurrence items and return the first one.
 * Return null if there are no even-occurrence items.
*/

/*
 * example usage:
 * var onlyEven = evenOccurrence([1, 7, 2, 4, 5, 6, 8, 9, 6, 4]);
 * console.log(onlyEven); //  4
*/

var evenOccurrence = function(arr) {
  // i want to take record of what values are in the array and how many times they appear
  // create an object to track values and occurences
  let records = {};
  //define array to store even occurrence values
  let evens = [];
  //assign each value as the key and their occurecnes as a value
  for (let key of arr) {
    records[key] = records[key] + 1 || 1;
  }
  //iterate through array
  for(let i = 0; i < arr.length; i++) {
    //define a temp var to keep track of element
    let temp = arr[i];
    if (records[temp] % 2 === 0) {
      return temp;
    }
  }
  return null;
};

console.log(evenOccurrence([1, 7, 2, 4, 5, 6, 8, 9, 6, 4]))