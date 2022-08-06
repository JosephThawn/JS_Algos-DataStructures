/**33. Search in Rotated Sorted Array

There is an integer array nums sorted in ascending order (with distinct values).
Prior to being passed to your function, nums is possibly rotated at an unknown pivot index k (1 <= k < nums.length) such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 and become [4,5,6,7,0,1,2].
Given the array nums after the possible rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.
You must write an algorithm with O(log n) runtime complexity.
 */
//this soultion for this question is not the right answer, but 70% are coorect
/**33. Search in Rotated Sorted Array

There is an integer array nums sorted in ascending order (with distinct values).
Prior to being passed to your function, nums is possibly rotated at an unknown pivot index k (1 <= k < nums.length) such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 and become [4,5,6,7,0,1,2].
Given the array nums after the possible rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.
You must write an algorithm with O(log n) runtime complexity.
 */
//this soultion for this question is not the right answer, but 70% are coorect

var search = function (nums, target) {
  // Special case
  if (nums === null || nums.length === 0) {
    return -1;
  }
  // Left and right pointers in the array
  let left = 0;
  let right = nums.length - 1;
  // First step is to find the pivot where the
  // array is rotated
  while (left < right) {
    // Middle pointer
    let middle = Math.floor((left + right) / 2);
    // If the element at the mid is greater than
    // the element at the right then we can say that
    // the array is rotated after middle index
    if (nums[middle] > nums[right]) {
      left = middle + 1;
    }
    // Else, the pivot is in the left part
    else {
      right = middle;
    }
  }
  // After the above loop is completed, then the
  // left index will point to the pivot
  const pivot = left;
  left = 0;
  right = nums.length - 1;
  // Now we will find in which half of the array,
  // our target is present
  if (target >= nums[pivot] && target <= nums[right]) {
    left = pivot;
  } else {
    right = pivot;
  }
  // Now perform normal binary search
  while (left <= right) {
    let middle = Math.floor((left + right) / 2);
    if (nums[middle] === target) {
      return middle;
    } else if (target < nums[middle]) {
      right = middle - 1;
    } else {
      left = middle + 1;
    }
  }
  return -1;
};

console.log(search([4, 5, 6, 7, 0, 1, 2], 0));
console.log(search([1], 0));
