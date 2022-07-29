/**The objectives of recursion
 * Define what recursion is and how it can be used
 * Understand the two essential componenets of a recursive function
 * Visualize the call stack to better debug and understand recursive functions
 *use helper method recursion and pure recursions to solave more difficult problems.

what is recursion?
  A process( afucntion in our case) that calls itself.


why do I need to know this recursion?
  It is everywhere!, such as, 
  1. JSON.parese/JSOn.stringify
  2. document.getElementById and DOM traversal algorithms
  3. Object traversal
  4. We will see it with more complex data structures
  5. it's sometimes a cleaner alternative to iteration.

what happend behind the scenes when functions are called in Javascript?
  In almost all pgram languages, there is a built in data structrue that manages what happen when functions are invoked. In javascript, that is called call stack.
What is call stack?
  1. Any time a function is invoked it is placed (pushed) later!
  2. When javascript sees the return jeyword or when the function ends, the complier will remove(pop)

 */

//call stack example
function takeShower() {
  return "Showering!";
}

function eatBreakfast() {
  let meal = cookFood();
  return `Eating ${meal}`;
}

function cookFood() {
  let items = ["Oatmeal", "Eggs", "Protein Shake"];
  return items[Math.floor(Math.random() * items.length)];
}
function wakeUp() {
  takeShower();
  eatBreakfast();
  console.log("Ok ready to go to work!");
}

wakeUp();
