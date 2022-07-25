/**Freequency Counters Pattern
 * This patters unses obj ts o sets to collect values. frequecne of values This can often avodi  the needo for nested loops or O(N^2)operations with arrarys/strings
 *
 * Write a function called same, which accepts tow arrarys. The function should return true if every value in the array has it's corresponding vlaue squared in the second array. The frequency of values must be the same.
 * same([1,2,3], ), [4,1,9] This is true
 * same([1,2,3], [1,9]) This is false
 * same([1,2,1], [4,4,1] false (must be same frequency))
 */

//naive soultion
// O(n^2) this is nested loop
function same(arr1, arr2) {
  if (arr1.length !== arr1.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    //why ** uinstead of *
    let correctIndex = arr2.indexOf(arr1[i] ** 2);
    if (correctIndex === -1) {
      return false;
    }
    console.log(arr2);
    arr2.splice(correctIndex, 1);
  }
  return true;
}
// console.log(same([1, 2, 3, 2], [9, 1, 4, 4, 25, 36]));

//Frequency Counter Pattern
//refactor solution
//this is O(N)

function sameTwo(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};
  for (let val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }
  //remember that two loops is vastly better than two nested loops, two separe loops
  for (let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }
  for (let key in frequencyCounter1) {
    if (!(key ** 2 in frequencyCounter2)) {
      return false;
    }
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      return false;
    }
  }

  console.log(frequencyCounter1);
  console.log(frequencyCounter2);

  return true;
}
// console.log(sameTwo([1, 3, 2, 2], [9, 1, 4, 4]));
// console.log(sameTwo([1, 3, 2, 2, 5], [9, 1, 4, 4, 11]));
//the idea is that as long as the first has matching to 2nd arrry and it shows true; otherewiese flase.
console.log(same([1, 2, 3, 2], [9, 1, 4, 4, 25, 36, 11]));
