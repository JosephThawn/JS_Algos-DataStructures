/** The Objectives of Searching Algorithm
 Describe what a seraching alogorithm is
 implement linear search on arrays
 implement binary search on sorted arrays
 implement a naive string searching algorithm
 implement the KMP string searching algorithm
 */

/**
How do we search?
  Given an array, the simplest way to serach for an value is to look at evey elemebnt in the array and check if it's the value we want.

In JavaScript, the linear search are
1. indexof
2. includes
3. find
4. findIndex

Note: linear search is the best for unsorted array!

*/

/**Linear Search Exercise
 Write a function called linearSearch which accepts an array and a value, and returns the index at which the value exists, if the value does not exit in the array, return -1

linearSearch([10, 15, 20, 25, 30], 15) // 1
linearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 4) // 5
linearSearch([100], 100) // 0
linearSearch([1,2,3,4,5], 6) // -1
linearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 10) // -1
linearSearch([100], 200) // -1

Linear Serach Pseudocode
1. This function accepts an array and a value
2.loop tthrough the array and check if the current array element is eaul to the value
3. if it is, return the index at which the element is found
4. if the value is never found, return -1
 */

function linearSearch(arr, val) {
  //loop tthrough the array and check if the current array element is eaul to the value
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === val)
      //if it is, return the index at which the element is found
      return i;
  }
  //if the value is never found, return -1
  return -1;
}
console.log(linearSearch([10, 15, 20, 25, 30], 15));
console.log(linearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 4));
console.log(
  linearSearch([1, 2, 3, 4, 5], 6) // -1
);

/**Linear Serach Big O
 O(1) Best
 O(N) worst
 O(N) average
 * 
 */
