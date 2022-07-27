/**Frequecny Counter/Multple Pointers- areThere Duplciates
 * Implement a function called areThfeDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in, You can solve this using the frequency counter pattern Or the multiple pointers patter.
 *Inputs:
 *areThereDuplicates(1, 2, 3) // false
 *areThereDuplicates(1, 2, 2) // true
 *areThereDuplicates('a', 'b', 'c', 'a') // ture
 *Restrictions:
 *Time- O(N)
 *space- O(N)
 *Bonus:
 * Time- O(n log n)
 * Space- O(1)
 */
//solving with Frequecny pattern
function areThereDuplicates() {
  let collection = {};
  for (let val in arguments) {
    collection[arguments[val]] = (collection[arguments[val]] || 0) + 1;
  }
  for (let key in collection) {
    if (collection[key] > 1) return true;
  }
  return false;
}
// console.log(areThereDuplicates("a", "b", "c", "a"));

//soling with using multiple pointers
//the second solution dose not seem right and will be back!
function areThereDuplicatesOne(...args) {
  // Two pointers
  //why sort here?
  args.sort((a, b) => a > b);
  let start = 0;
  let next = 1;
  while (next < args.length) {
    if (args[start] === args[next]) {
      return true;
    }
    start++;
    next++;
  }
  return false;
}

console.log(areThereDuplicatesOne(1, 5, 3, 4, 1));
console.log(areThereDuplicatesOne("a", "b", "c", "a"));
console.log(areThereDuplicatesOne(1, 2, 3));

//solving with one liner solution
function areThereDuplicatesTwo() {
  return new Set(arguments).size !== arguments.length;
}
console.log(areThereDuplicatesTwo("a", "b", "c", "a"));
console.log(areThereDuplicatesTwo(1, 5, 3, 4));
