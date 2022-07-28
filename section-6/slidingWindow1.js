/**Sliding Window - maxSubarrarySum
 * Given an arrary of integers and a number, write a function called maxSubarrarySum, which finds the maximum sum of a subarrary with the length of the number passed to the function.
 * Note that a subarry must consist of consecutive lelments from the orignal arrary. In the first example below [100, 200, 300] is a sybarray of the original array, but [100, 300] is not
 * maxSubarrarySum([100, 200, 300, 400], 2)//700
 * maxSubarrarySum(1, 4, 2, 10, 23, 3, 1, 0, 20)// 39
 * maxSubarrarySum([-3, 4, 0, -2, 6, -1], 2)// 5
 * maxSubarrarySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2) //5
 * maxSubarrarySum([2, 3], 3) // null
 *
 */

function maxSubarraySum(arr, num) {
  //if arr.length is less than num return null
  if (arr.length < num) return null;
  //define a new variable and set it to zero
  let total = 0;
  //lloping over the arr, which is first qrguments
  for (let i = 0; i < num; i++) {
    total += arr[i];
    console.log("total", total);
  }
  let currentTotal = total;
  for (let i = num; i < arr.length; i++) {
    //don't get this part
    currentTotal += arr[i] - arr[i - num];
    total = Math.max(total, currentTotal);
    console.log("currentTotal", currentTotal);
  }
  return total;
}
let result = maxSubarraySum([100, 200, 300, 400], 2);
console.log(result);
