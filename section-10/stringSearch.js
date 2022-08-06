/**Naive String Search
 1. Suppose you want to count the number of times a smaller string appears in a longer string.
 2. A straight forward apporach involves checking pairs of characters individually
 
 Pesudocode 
 1. loop over the longer string
 2. loop over the shorted string
 3. if the characters don't match, break out of the inner loop
 4. if the characters do match, keep going
 5. if you complelete the inner loop and find a match, increment the count of matches. 
 */
//Search Navie String

function naiveSearch(long, short) {
  let count = 0;
  for (let i = 0; i < long.length; i++) {
    for (let j = 0; j < short.length; j++) {
      console.log(short[j], long[i + j]);
      if (short[j] !== long[i + j]) {
        console.log("Break");
        break;
      }
      if (j === short.length - 1) {
        console.log("found one");
        count++;
      }
    }
  }
  return count;
}

console.log(naiveSearch("lorie loled", "lol"));
