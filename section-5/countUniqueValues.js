//CountedUnigque Values

/**Implement a function claeed countUniqueVlaues, which accepts a sorted arrary, and counts the qunque values in the array. There can be negative numbers in the array, but it will always be sorted
 * countUniqueValues([1,1,1,1,1,2])//2
 * countUniqueValues([1,2,3,4,4,4,7,7,12,13])//7
 * countUniqueValues([])//0
 * countUniqueValues([-2,-1,-1,0,1])//4
 *
 */

function countUniqueValues(arr) {
  if (arr.length === 0) return 0;
  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    //if i is not equal to j increase one increment from the left while j is looping through from the left(beginning)
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
    // console.log(i, j);
  }
  return i + 1;
}
// console.log(countUniqueValues([1, 2, 3, 4, 5, 6, 7, 6, 6, 7]));
console.log(countUniqueValues([3, 3, 3, 4, 4, 4, 5, 5, 5, 5, 5, 6]));

//another soltuion from online

function countUniqueValuesOne(arr) {
  //create an emplty object and for every integer encountered either
  let newObj = {};
  //iterate over the array
  for (let i = 0; i < arr.length; i++) {
    let char = arr[i];
    //if the item is already in newObj increment its value by 1
    if (newObj[char] > 0) {
      newObj[char]++;
      // if the interger is not already in newObj put it there with a value of 1
    } else {
      newObj[char] = 1;
    }
    console.log(newObj);
  }
  //return length of arrary returned by Object.keys(newObj)
  return Object.keys(newObj).length;
}
// console.log(countUniqueValuesOne([1, 1, 1, 2, 2, 2, 3, 3, 5, 5]));
