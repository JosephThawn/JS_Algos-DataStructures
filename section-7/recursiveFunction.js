/**
 How recursive function work?
  Invoke the same function with a different input until you reach your base case.

What is base case 
  The condition when the recursion ends. 

Two essential parts of a recursive function
  1. Base Case
  2. Different Input

 */

//firt recursion example
function countDown(num) {
  if (num <= 0) {
    console.log("All done!");
    //return is important here; if not the lopp goess infinity, in othere words,  return is base case.
    return;
  }
  console.log(num);
  num--;
  countDown(num);
}
// countDown(5);

//our second example
/**
   Can you spot the base case?
   Do you notice the differece input?
   What would happen if we didn't return?
   */
//the way call stack goess a little bit complciated
//will be back
function sumRange(num) {
  if (num === 1) return 1;
  return num + sumRange(num - 1);
}
console.log(sumRange(4));
