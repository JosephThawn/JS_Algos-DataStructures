/**Multiple Pointers - isSubSequence
 * Write a function called isSubsequence which takes two strings and checks whether the characters in the first string form a subsequence of the charactrs in he second string. In other words, the function should check whether the characters in the first string appear somewhere in the second string without then order changing.
 * isSubsequence('hello', 'helloWorld')// true
 * isSubsequence('sing', 'sting')// true //true
 * isSubsequence('abc', 'abracdefd')// true
 * isSubsequence('abc', 'acb')// false (order matter)
 */
//What is SubArry_ contigous part of arrary, in other words, the elements has to be continous
//what is subsequence in an array _ may not be contigous but maintain the relative order
//what is subset in an arrary- may not be contious and in order, but the element has to contian the original arrary.
//

function isSubsequence(str1, str2) {
  //define two variables from the first is index of 0 and the second one is 0
  let first = 0;
  let second = 0;
  if (!str1) return true;
  //if the second is less than 2 digits
  while (second < str2.length) {
    //if the two digit number of second is equal to the first index of arry then increase one
    if (str2[second] === str1[first]) first++;
    //I did not get this part
    if (first === str1.length) return true;
    second++;
  }
  return false;
}
console.log(isSubsequence("abc", "acb"));
console.log(isSubsequence("hello", "helloWorld"));
