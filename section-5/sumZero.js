/**Multiple Pointers
 *
 *
 * creating pointers or values that correspond to an index or position and move towards the beginning, end or midddle based on a certain coditio. very effecient for solving problems with minmal space complexith as well.
 *
 * An Example
 * Write a function called sumZero which accepts a sorted arrary(order from smallest number to oldest [-3,-2, -1, 0, 1, 2,3]) of integers. The function should find the first pair where the sum is 0. Return an arrary that includes both values that sum to zero or undefined if a pair does not exist.
 * sumZero([-3, -2, -1, 0, 1, 2, 3])// [-3, 3] this is true
 * sumZero([-2, 0, 1, 3])//undefined
 * sumZer0([1,2,3])// undefined
 */
// Naive solution
function sumZero(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) {
        return [arr[i], arr[j]];
      }
    }
  }
}
console.log(sumZero([-3, -2, -1, 0, 1, 2, 3]));
//This nauve solution because Time complexity - O(N^2)
//and space complexity - O(1)

//refactior solution
function sumZeroOne(arr) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      //if the sum is greate than in which -4+10 =6
      right--;
      //subtract 1 increment from right which is 3 then go on 2,1,0,
    } else {
      left++;
      //if the sum is less than or negative
      //one increment from the left -4,-3,-2 and so on
      //we stop until we find a pair where  the sum is zero
    }
  }
}
console.log(sumZero([-4, -3, -2, -1, 0, 1, 2, 3, 10]));
console.log(sumZero([-4, -3, -2, -1, 0, 5, 10]));

//aviod false positive of while (left <= right)

//This refator solution time complexity - O(N)
//and space complexity - O(1)
