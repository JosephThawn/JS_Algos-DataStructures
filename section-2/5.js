//suppose you want to write a function that calcualtes the sum of all numbers from 1 up to and including some numbr n.

// example - 1;
function addUpTo(n) {
  let total = 0;
  for (let i = 0; i <= n; i++) {
    total += i;
  }
  return total;
}
console.log(addUpTo(6));
var time3 = performance.now();
addUpTo(1000000000);
var time4 = performance.now();
console.log(`Time Elapsed example one: ${time4 - time3 / 1000} seconds.`);

//example-2
function addUpThree(n) {
  return (n * (n + 1)) / 2;
}
console.log(addUpThree(6));

let time1 = performance.now();
addUpThree(1000000000);
let time2 = performance.now();
console.log(`Time Elapsed example 2: ${time2 - time1 / 1000} seconds.`);

//which one better
//faster?
//less memory-intesive
//more readable?

//O(n2)
function pritnAllParis(n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      console.log(i, j);
    }
  }
}
function logAtMost10(n) {
  for (var i = 1; i <= Math.min(n, 10); i++) {
    console.log(i);
  }
}
logAtMost10(10);
