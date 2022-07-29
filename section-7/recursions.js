//Writing factorial interatively / non-recursive
function factorial(num) {
  let total = 1;
  for (let i = num; i > 1; i--) {
    total *= i;
  }
  return total;
}
console.log(factorial(4));
// {
//   4 * 1 = 4
//   3 * 1 = 3
//   2 * 1 = 2
//   1 * 1 = 1
//           24
// }

//write factorial recursively
function factorial(num) {
  if (num === 1) return 1;
  return num * factorial(num - 1);
}
console.log(factorial(5));

/**Common Recursion pitfalls
   1. without the base case returns infinity
   2. forgetting to return or returning the wrong thing.
   3. stack overflow, which means your stack is not stopping.
  
   */

/**Helper Method Recursion
 *
 *
 */
//an example of helper menthod recursion
function collectOddValues(arr) {
  let result = [];

  function helper(helperInput) {
    if (helperInput.length === 0) {
      return;
    }

    if (helperInput[0] % 2 !== 0) {
      result.push(helperInput[0]);
    }

    helper(helperInput.slice(1));
  }

  helper(arr);

  return result;
}

console.log(collectOddValues([1, 2, 3, 4, 5, 6, 7, 8, 9]));

/**Pure Recursion
   Pure Recurshio tips- for arrays, use methods like slice, the spread opeartor, and concat that make copies of arrays so you do not mutate them.
   */
function collectOddValues(arr) {
  let newArr = [];

  if (arr.length === 0) {
    return newArr;
  }

  if (arr[0] % 2 !== 0) {
    newArr.push(arr[0]);
  }

  newArr = newArr.concat(collectOddValues(arr.slice(1)));
  return newArr;
}

console.log(collectOddValues([1, 2, 3, 4, 5]));
