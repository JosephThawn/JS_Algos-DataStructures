//709 Binay Search
function binarySearch(nums, target) {
  let left = 0;
  let right = nums.length - 1;
  let middle = Math.floor((left + right) / 2);
  while (nums[middle] !== target && left <= right) {
    if (target < nums[middle]) right = middle - 1;
    else left = middle + 1;
    middle = Math.floor((left + right) / 2);
  }
  return nums[middle] === target ? middle : -1;
}
console.log(binarySearch([-1, 0, 3, 5, 9, 12], 9));

//from solution from leetcode
function search(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const middle = Math.floor((left + right) / 2);
    const current = nums[middle];

    if (current > target) {
      // ignore the right part from the array and the current index
      right = middle - 1;
    } else if (current < target) {
      // ignore the left part from the array and the current index
      left = middle + 1;
    } else {
      return middle;
    }
  }
  // return -1 if middle did never equal the target
  return -1;
}
