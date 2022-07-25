/** Divide and Conquer
 * This pattern involves dividing a data set into smaller chunks and then repeating a process with a subset of sata. This pattern can tremendously decrease time complexity.
 */

/**Given a sorted arrary of intergers, write a function called search, that accepts a value and returns the index where the value passed to the function is located. Fi the value is not found, return -1
 *
 * search([1, 2, 3, 4, 5, 6], 4) // 3
 * search([1 ,2 ,3 , 4, 5, 6], 6) // 5
 * search([1, 2 ,3 ,4, 5, 6,], 11) // -1
 */

//a naive solution(linear search)
function search(arr, val) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) {
      return i;
    }
  }
  return -1;
}
console.log(search([1, 2, 3, 4, 5, 6], 4));
//This soultion time complexity O(n)
//it is good when the index of arry is short; it wont affect to time complexity much

//refactor solution (binary search)
function searchOne(array, val) {
  let min = 0;
  let max = array.length - 1;

  while (min <= max) {
    let middle = Math.floor((min + max) / 2);
    let currentElement = array[middle];

    if (array[middle] < val) {
      min = middle + 1;
    } else if (array[middle] > val) {
      max = middle - 1;
    } else {
      return middle;
    }
  }
  return -1;
}
console.log(searchOne([1, 2, 3, 4, 5, 6, 100, 120, 150, 150], 150));
//This binary search is a fast way and avoid time complexty issue to find the answer.
