/**Multiple Pointers - averagePair
 * whrite a function called averagePair. Gieven a sorted arrary of integers and a target average, determine if there is a pair of values in the arrary where the average of the pair equals the target average. There may be more than one pai that matches the average target.
 * Bonus constraints:
 * Time: O(N)
 * Space: O(1)
 * simple input:
 * averagePair([1,2,3] 2.5)// true
 * averagePair([1,3,3,5,6,7,10,12,19], 8) // true
 * averagePair([-1, 0, 3, 4 ,5, 6], 4.1)// false
 * averagePai([-1, 0, 3,4, 5, 6], 4.1) // false
 * aveargePair([], 4)// false
 */
//refactor soultion
function averagePair(arr, num) {
  //creating two pointers from left and right
  let start = 0;
  let end = arr.length - 1;
  //since it is sorted arry we checked the input arry is in order, whihc the value starts from left to right
  while (start < end) {
    let avg = (arr[start] + arr[end]) / 2;
    if (avg === num) return true;
    else if (avg < num) start++;
    else end--;
  }
  return false;
}
console.log(averagePair([1, 2, 3], 2.5));
console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1));
