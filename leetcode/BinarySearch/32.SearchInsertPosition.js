/**32. Search Insert Position
 Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.
You must write an algorithm with O(log n) runtime complexity.
 */

function searchInsert(nums, target) {
  let left = 0;
  let right = nums.length;

  while (left < right) {
    const middle = Math.floor((left + right) / 2);
    console.log(middle);
    if (nums[middle] < target) {
      left = middle + 1;
      //If not, return the index where it would be if it were inserted in order.(the key from other binarySearch Question)
    } else {
      right = middle;
    }
  }
  return left;
}
console.log(searchInsert([1, 3, 5, 6, 8], 9));
// console.log(searchInsert([1, 3, 5, 6, 8], 9));
// console.log(searchInsert([1, 3, 5, 6], 2));

/**
 What is the question mush O(long n)
  In this case I used long by using middle in which every time it looks for the target value (cut in half.)
 */
