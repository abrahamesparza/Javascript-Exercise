/**
 * Write a function `f(a, b)` which takes two strings as arguments and returns a
 * string containing the characters found in both strings (without duplication), in the
 * order that they appeared in `a`. Remember to skip spaces and characters you
 * have already encountered!
 *
 * Example: commonCharacters('acexivou', 'aegihobu')
 * Returns: 'aeiou'
 *
 */


// this function will take two string arguments
// and return a new string of characters that were
// found in both strings in the order of string1
var commonCharacters = function(string1, string2) {
  //create a new set to store common characters
  let result = new Set();
  //split each string into an array
  string1 = string1.split('');
  //iterate through string1 array
  for (let i = 0; i < string1.length; i++) {
    //check if string2 contains chars from string1
    if (string2.includes(string1[i])) {
      //if true add each char to my set
      result.add(string1[i]);
    }
  }
  //convert set to an array, then join into a string
  result = [...result].join('');
  //return result
  return result;
};
console.log(commonCharacters('acexivou', 'aegihobu'));