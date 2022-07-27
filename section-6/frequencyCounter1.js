/**Frequncy Counter- sameFrequcny
 * Write function called sameFrequency. Give tow positive integers. Find out if the two numbers have the same  frequency of digits. Your soultion MUST have the following complexities:
 * Time:O(N)
 * sameFrequency(182,281)// true
 * sameFrequency(34,14)// false
 * sameFrequency(3589578,5879385)// true
 * sameFrequency(22,222)// false
 */

function sameFrequencyExample(first, second) {
  //if first argument and second argumer isn't equal return false
  if (first.length !== second.length) {
    return false;
  }
  const lookup = {};
  //looping arry of first argument
  for (let i = 0; i < first.length; i++) {
    let letter = first[i];
    //if letter exists, increment, otherwise set to 1
    lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
  }
  console.log("lookup", lookup);

  //lopping array of second argument
  for (let i = 0; i < second.length; i++) {
    let letter = second[i];
    //can't find letter or letter is zeor then it's not an anagram
    if (!lookup[letter]) {
      return false;
    } else {
      lookup[letter] -= 1;
    }
  }
  return true;
}
console.log(sameFrequencyExample(123, 321));
console.log(sameFrequency("anagram", "nagaram"));

//the new version way of solving following the video lecture
function sameFrequency(num1, num2) {
  //convert both arguments to string value
  let strNum1 = num1.toString();
  let strNum2 = num2.toString();
  if (strNum1.length !== strNum2.length) return false;

  //why assing empty {} here
  let countNum1 = {};
  let countNum2 = {};

  for (let i = 0; i < strNum1.length; i++) {
    //I do not unders this part
    countNum1[strNum1[i]] = (countNum1[strNum1[i]] || 0) + 1;
  }
  for (let j = 0; j < strNum1.length; j++) {
    //I do not unders this part
    countNum2[strNum2[j]] = (countNum2[strNum2[j]] || 0) + 1;
  }

  for (let key in countNum1) {
    if (countNum1[key] !== countNum2[key]) return false;
  }
  return true;
}
console.log(sameFrequency(182, 281));
//Time:O(N)
