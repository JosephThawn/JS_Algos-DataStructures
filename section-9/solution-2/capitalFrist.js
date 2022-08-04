/**CapitalizeFirst
 Write a recursive function called capitalizeFirst. Give an array of strings, capitalize the first letter of each strings, capitalize the frst letter of each string in the array.
// capitalizeFirst(['car','taco','banana']); // ['Car','Taco','Banana']
 */

function capitalizeFirst(array) {
  if (array.length === 1) {
    return [array[0][0].toUpperCase() + array[0].substr(1)];
  }
  const res = capitalizeFirst(array.slice(0, -1));
  // console.log("res", res);
  const string =
    array.slice(array.length - 1)[0][0].toUpperCase() +
    array.slice(array.length - 1)[0].substr(1);
  // console.log("string", string);
  res.push(string);
  return res;
}

console.log(capitalizeFirst(["car", "taco", "banana"]));
/**
  const res = capitalizeFirst(array.slice(0, -1))
        res  = [("car", "taco")]
  const string =
      array.slice(array.length - 1)[0][0].toUpperCase() +
      [("CAR"), ("TACO"), "BANANA"]
      array.slice(array.length - 1)[0].substr(1);
  
      Will be back for this expalnation
  
  
   */

//an example from stackOverFlow

const days = ["car", "taco", "banana"];

for (let day of days) {
  day = day.charAt(0).toUpperCase() + day.substr(1);
  console.log(day);
}
// anther example
// let sentence = " how are you";

// let res = sentence[0].toUpperCase() + sentence.slice(1).toUpperCase()

// console.log(res)

let sentence = "i am fine";
function captlizeString(str) {
  return str[0].toUpperCase() + str.slice(1).toLowerCase();
}
// let captlizeString = (str) => str[0].toUpperCase() + str.slice(1).toLowerCase()

let words = sentence.split(" ").map(captlizeString);
let CapitalizedSentence = words.join("");
console.log(words);
console.log(CapitalizedSentence);
