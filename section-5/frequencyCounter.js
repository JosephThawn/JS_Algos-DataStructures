//Frequecny Counter Anagram Challenge
/**Frequecny Counter- validAnagram
 * Gieven two srings write a function to determine if the second string is an anagram of the first. An anagram is a word, pharse, or name formed by rearraning the letters of another, suc as cinema, formed from iceman.
 * what is Anagram_Anagram is a play on words created by rearraning the letter of the original word to make a new word or phrase.
 */
//Example
// vaildAnagram("", ""); //true
// validAnagram("aaz", "zza"); //false
// validAnagram("anagram", "nagram"); //true
// validAnagram("far", "car"); //false
// validAnagram("amanaplanacan", "acanalmanplanpamana"); //false
// validAnagram("qwerty", "qewrt"); //true
// validAnagram("texttwisttime", "timetwisttext"); //ture

//Solutiong this Anagram problem.
function validAnagram(first, second) {
  if (first.length !== second.length) {
    return false;
  }
  const lookup = {};

  for (let i = 0; i < first.length; i++) {
    let letter = first[i];
    //if either exists, increment, otherwise set to 1
    lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
  }
  console.log("lookup", lookup);

  for (let i = 0; i < second.length; i++) {
    let letter = second[i];
    //can't find letter or letter is zero then it's not an anagram
    if (!lookup[letter]) {
      return false;
    } else {
      lookup[letter] -= 1;
    }
  }
  return true;
}
console.log(validAnagram("anagram", "nagaram"));
console.log(validAnagram(123, 321));
