/**isPanlindrome
 Write a recursive function called isPainlindrome which returns true if the string passed to it is a palindronme(reads the same forward and backward). Otherwise it returns false. 
 // isPalindrome('awesome') // false
// isPalindrome('foobar') // false
// isPalindrome('tacocat') // true
// isPalindrome('amanaplanacanalpanama') // true
// isPalindrome('amanaplanacanalpandemonium') // false
 */
//will be back for simlar soution with looping array
function sumZeroOne(arr) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let sum = arr(left) + arr(right);
    if (sum === "") {
      return arr(left), arr(right);
    } else if (sum > 0) {
      //if the sum is greate than in which -4+10 =6
      right--;
      //subtract 1 increment from right which is 3 then go on 2,1,0,
    } else {
      left++;
      //if the sum is less than or negative
      //one increment from the left -4,-3,-2 and so on
      //we stop until we find a pair where  the sum is zero
    }
  }
}

function isPanlindrome(str) {
  if (str.length === 1) return true;
  if (str.length === 2) return str[0] === str[1];
  if (str[0] === str.slice(-1)) return isPanlindrome(str.slice(1, -1));
  return false;
}
console.log(isPanlindrome("awesome"));
/**
  isPanlindrome("awesome")
    isPanlindrome(str.slice(1, -1));
    isPanlindrome("wesome")
  
  isPanlindrome("wesome")
    isPanlindrome(str.slice(1, -1));
    isPanlindrome("esom")
  
  isPanlindrome("esom")
    isPanlindrome(str.slice(1, -1));
    isPanlindrome("so")
    since str.length === 2 base case stops 
    and return str[0] == str[1]
  
  
  
  
  
  
  
  
   */
