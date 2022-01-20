/*
 Write a function that takes as its input a string and returns an array of arrays as shown below sorted in descending order by frequency and then by ascending order by character.

 *  characterFrequency('mississippi') ===
 *  [
 *    ['i', 4],
 *    ['s', 4],
 *    ['p', 2],
 *    ['m', 1]
 *  ]

 *  characterFrequency('miaaiaaippi') ===
 *  [
 *    ['a', 4],
 *    ['i', 4],
 *    ['p', 2],
 *    ['m', 1]
 *  ]

 *  characterFrequency('mmmaaaiiibbb') ===
 *  [
 *    ['a', 3],
 *    ['b', 3],
 *    ['i', 3],
 *    ['m', 3]
 *  ]
*/

function charFreq (string) {
  //define an object to store characters as a key and occurences as a value
  let tracker = {};
  //define an outer array to store each inner array
  let outer = [];
  //iterate through each character in string
  for (let char of string) {
    //seat
    tracker[char] = tracker[char] + 1 || 1;
  };
  //iterate through my object and push a new [key,value] inner array into the outer array
  for (let key in tracker) {
    outer.push([key, tracker[key]]);
  }

  const sorted = outer.sort((a, b) => {
      return b[1] - a[1];
    }).sort((a,b) => {
      return a[0].charCodeAt() - b[0].charCodeAt();
    })

  return sorted;
};
// console.log(charFreq('mississippi'));
// console.log(charFreq('miaaiaaippi'));
console.log(charFreq('mmmaaaiiibbb'));