/**someRecursive
 Write a recursive function called someRecursive which accepts an arrary and a callback. The function returns true if a single value in the array returns true when passed to the callback. Otherwise it returns false
 // SAMPLE INPUT / OUTPUT
// const isOdd = val => val % 2 !== 0;
// someRecursive([1,2,3,4], isOdd) // true
// someRecursive([4,6,8,9], isOdd) // true
// someRecursive([4,6,8], isOdd) // false
// someRecursive([4,6,8], val => val > 10); // false
 */
function someRecursive(array, callback) {
  if (array.length === 0) return false;
  if (callback(array[0])) return true;
  return someRecursive(array.slice(1), callback);
}
const isOdd = (val) => val % 2 !== 0;
console.log(someRecursive([1, 2, 3, 4], isOdd));
/**
  someRecursive([1,2,3,4], isOdd)
    return someRecursive(array.slice(1), callback);
    return ([2,3,4], 1/2 !== 0)
      return ([2,3,4], 0.5 !== 0) the base case of call back stops here because it return true
  
  someRecursive([2,3,4], isOdd))
    return someRecursive(array.slice(1), callback);
    return ([3,4], 0.5 !== 0)
    return ([3,4], isOdd)
  
  
  someRecursive([3,4], isOdd)
    return someRecursive(array.slice(1), callback);
    return ([4], 0.5 !== 0)
    return ([4], isOdd)
    the base case of array stops because 
  
  
  
  //wii be back for this problem!
    
  
  
   */
