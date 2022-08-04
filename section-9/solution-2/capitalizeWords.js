/**
 Write a recursive function called capitalizeWords. Given an array of words, return a new array containing each word capitalized.
 // let words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
 */

function capitalizeWords(array) {
  //if array.length is equal to 1 base case stops and returns [array[0], toUppercase]
  if (array.length === 1) {
    return [array[0].toUpperCase()];
  }
  //remove the first and last index of the array
  let res = capitalizeWords(array.slice(0, -1));
  //then add to
  res.push(array.slice(array.length - 1)[0].toUpperCase());
  return res;
}
let words = ["i", "am", "learning", "recursion"];
console.log(capitalizeWords(words));
