/**Binary Search
 1. Binary search is a much faster form of search.
 2. Rather than eliminating one element at a time, you can elimination half of the remaining elements at a time.
 3. Binary search only works on sorted arrays
 
Binary search use the pattern of divide and conquer.

Bineary Search PesudoCode
1. This function accepts a sorted array and a value
2. Create a left pointer at the start of the array, and a right pointer at the end of the array.
3. While the left pointer comes before the fight pointer:
  a. Create a pointer in the middle.
  b. if you find the value you want, return the index,
  c. if the value is too small, move the left pointer up. 
  d. if the value is too large, move the right pointer down
4. if you never find the value, return -1
 */

/**Binary Search Exercise
 Write a unction called binarySearch which accepts a sorted array and a value and returns the index at which the value exists, Otherwise, return -1,

 This algorithm should be more efficient than linearSearch - you can read how to implement it here - https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search and here - https://www.topcoder.com/community/data-science/data-science-tutorials/binary-search/

Examples:
binarySearch([1,2,3,4,5],2) // 1
binarySearch([1,2,3,4,5],3) // 2
binarySearch([1,2,3,4,5],5) // 4
binarySearch([1,2,3,4,5],6) // -1
binarySearch([
  5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 
  40, 44, 64, 79, 84, 86, 95, 96, 98, 99
], 10) // 2
binarySearch([
  5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 
  40, 44, 64, 79, 84, 86, 95, 96, 98, 99
], 95) // 16
binarySearch([
  5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 
  40, 44, 64, 79, 84, 86, 95, 96, 98, 99
], 100) // -1
 */

function bianrySearch(arr, elem) {
  // Create a left pointer at the start of the array
  let start = 0;
  // a right pointer at the end of the array.
  let end = arr.length - 1;
  // Create a pointer in the middle.
  let middle = Math.floor((start + end) / 2);
  // console.log(start, middle, end);
  while (arr[middle] !== elem && start <= end) {
    if (elem < arr[middle]) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
    middle = Math.floor((start + end) / 2);
  }
  // console.log(start, middle, end);
  //check
  if (arr[middle] === elem) {
    return middle;
  }
  return -1;
}

console.log(bianrySearch([2, 5, 6, 9, 13, 15, 28, 30], 15));
console.log(bianrySearch([2, 5, 6, 9, 13, 15, 28, 30], 50));

//shorted version
function binarySearch(arr, elem) {
  let start = 0;
  let end = arr.length - 1;
  let middle = Math.floor((start + end) / 2);
  while (arr[middle] !== elem && start <= end) {
    if (elem < arr[middle]) end = middle - 1;
    else start = middle + 1;
    middle = Math.floor((start + end) / 2);
  }
  return arr[middle] === elem ? middle : -1;
}
console.log(binarySearch([1, 2, 3, 4, 5], 5));
console.log(binarySearch([1, 2, 3, 4, 5], 6));

//Note O(log n) is very good when it comes to finding binary search unless we can not use O(N)
