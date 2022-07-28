/**Sliding Windpw
 * This pattern involves creating a window which can either be an array or number from one position to another.
 * Depending on a certain condition, the window either increase or closes(and a new windwo is cread)
 * very useful for keeping track of a subset of data in an array/string etc

/**Write a function called maxSubarraySum which accepts an arrary of integers and a number called n. The function shoud calculate the maximum sum of n consecutive elements in the arrary.
 * maxSubarrarySum([1,2,5,2,8,1,5], 2) // 10
 * maxSubarrarySum([1,2,5,2,8,1,5], 4) // 4
 * maxSubarrarySum([1,2,5,2,8,1,5], 1) // 6
 * maxSubarrarySum([1,2,5,2,8,1,5], 4) // 13
 * maxSubarrarySum([], 4) // null
 */
//naive solution
function maxSubarraySum(arr, num) {
  if (num > arr.length) {
    return null;
  }
  var max = -Infinity;
  for (let i = 0; i < arr.length - num + 1; i++) {
    temp = 0;
    for (let j = 0; j < num; j++) {
      temp += arr[i + j];
    }
    if (temp > max) {
      max = temp;
    }
  }
  return max;
}
console.log(maxSubarraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3));

//refactor solution and time complexity is O(N)

function maxSubarrarySumOne(arr, num) {
  let maxSum = 0;
  let tempSum = 0;
  if (arr.length < num) return null;
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }

  tempSum = maxSum;
  //the loop only loop one time and solve the problem of time complexity issue
  for (let i = num; i < arr.length; i++) {
    //dont understand this part?
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}
console.log(maxSubarrarySumOne([2, 6, 9, 2, 1, 8, 5, 6, 3], 3));
