//What is an Algorithm?
// A process or set of steps to accomplish a certain task.

/**   Probllem solving
 * 1.understanding the problem
 * 2.Explore conccrete example
 * 3.break it down
 * 4.solve/simplify
 * 5.Look back and refactor
 */

/**1.Understanding the problem
 * Ask question in order to understand the question
 * 1.can I restate the problem in you own words.
 * 2.what are the inputs that go into problem?
 * 3.what are the outputs that should come from the solution to the probem.
 * 4.Can the outputs be determined from the inputs? In other words, do I have enough information to solve the problem? (You may not able to asnwer this question until you set about solving the problem. That is okay; its still woirth considering the question at this early statge)
 * 5.How should I label the important pieces of data that are a part of the problem.
 

/**example one
 * Write a function which takes two numbers and returns their sum?
 * 1.can I restate the problem in you own words.
 * implement addition
 * 2.what are the inputs that go into problem?
 * integer numberss? 
 * float points?
 * what about string for large number
* 3.what are the outputs that should come from the solution to the probem.
  *integer numberss? 
 * float points?
 * what about string for large number
 * same issue but differnt questions
 * 4.Can the outputs be determined from the inputs? In other words, do I have enough information to solve the problem? (You may not able to asnwer this question until you set about solving the problem. That is okay; its still woirth considering the question at this early statge)
 * most cases is yes
 * 5.How should I label the important pieces of data that are a part of the problem.

 */

/**  2.Explore conccrete example
   * coming up with examples can help you understand the problem better
   * examples provides sanity checks that your eventula solution works how it should
   * user stories!
   * Unit Tests!
   * 1. start with simple examples
   * 2.progress to morecomplex examples
   * 3.explore exampre empty inputs
   * 4.exploreexamples with invalid inputs
   
   * Lets say Write a functin which takes in a string and retursn counts of each character in the string

  */

/**3. Break it down
 * explicity write out the step you need to take
 * whihc means planning ahead of by commenting out the steps(write out the steps)
 */

/**4. Solve/Simplify
 * Solve the problem if you can't solve a simpler problem
 * 1. find the core difficulty in what you are trying to do
 * 2.Temporarily ignore that difficulty
 * 3.write a simplified solution
 * 4.Then incorporate that difficulty back in.
 */

//Wrrite a function wich takes in a string and returns counts each character in the string.

function charCount(str) {
  //make object to returun at end
  let result = {};
  //loop over string, for each character...
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    //if the char is a number/letter and is a key in object, add one to count
    if (result[char] > 0) {
      result[char]++;
      //if the char is  a number/letter and not in object, add it to object and set value to 1
    } else {
      result[char] = 1;
    }
    //if character is something else(space, period, etc) dont do anything
    //returbn object at end
  }
  return result;
}
console.log(charCount("hello"));

/** 5. Look Back & Reafactor
 * congrats on solving it, but you are not done.
 * Refactoring questions
 * 1.can you check the result?
 * 2.cna you derive the result differently?
 * 3.cna you understand it at glacne?
 * 4.can you use the result or method for some other problem?
 * 5.cna you imporove the the performance of your solution?
 * 6.cna you think of ohter ways to refactor
 * 7.how have other people solved this prooblem?
 */

//refactoring using step-4
function charCountOne(str) {
  var obj = {};
  for (var i = 0; i < str.length; i++) {
    var char = str[i].toLowerCase();
    if (/[a-z0-9]/.test(char)) {
      if (obj[char] > 0) {
        obj[char]++;
      } else {
        obj[char] = 1;
      }
    }
  }
  return obj;
}
console.log(charCountOne("Hello"));

//refactoring with using for of loop
function charCountOne(str) {
  let obj = {};
  for (var char of str) {
    char = char.toLowerCase();
    if (/[a-z0-9]/.test(char)) {
      obj[char] = ++obj[char] || 1;
    }
  }
  return obj;
}
console.log(charCountOne("Hello Wold!"));
//to find the order of string use .charCodeAt("i")
//regular expression migh slow down the performance

//refactoring alnumberic becasue of the space and time complexity; performance purpose
function charCountFour(str) {
  var obj = {};
  for (var char of str) {
    char = char.toLowerCase();
    if (isAlphaNumeric(char)) {
      obj[char] = ++obj[char] || 1;
    }
  }
  return obj;
}

function isAlphaNumeric(char) {
  var code = char.charCodeAt(0);
  if (
    !(code > 47 && code < 58) && //numerice (0-9)
    !(code > 64 && code < 91) && // numeric (A-z)
    !(code > 96 && code < 123)
  ) {
    // lower alpha (a-z)
    return false;
  }
  return true;
}
console.log(charCountFour("You"));
