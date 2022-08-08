/**
 What is sorting?
  Sorting is the process of rearranging the itmes in a collection(e.g an array) so that the items are in some kind of order.

  Exmples:
  1. sorting numbersfrom smallest to larget
  2. sorting names alphabetically
  3. sorting movies based on releae year
  sorting movies based on revenue


Why do we need to learn this sorting algorithm?
  1. sorting is an incredibly common task, so it's good to know how it works.
  2.There are many different ways to sort things, and different techniques have their own advantages and disadvantages. 

Objectives of this section-11: Burbule sort
  1. Implement bubble sort
  2. Implement selection sort
  3. implement insertion sort
  4. understand why it is important to learn these simpler sorting algorithms. 

 */

/**
 
  Telling JavaSript how to sort
  1. The built-in sort method accepts an optional comparator function.
  2. You can use this comparator function to tell javascript how you want it to sort
  3. The comparator looks at pairs of elements(a and b) determines their sort order based on the return value.
    a. it it returns a negative number, a should come before b,
    b. if it returns a positive number, a should come after b,
    c. if it returns 0, a and b are the same as far as the sort is concerned.
 */
//here is an example for number
function numberCompare(num1, num2) {
  return num1 - num2;
  // return num2 - num1;
}

console.log([6, -4, 15, 10].sort(numberCompare));
// console.log([6, 4, 15, 10].sort(numberCompare));

//the example for string

function compareByStr(str1, str2) {
  return str1.length - str2.length;
}
console.log(
  ["Steel", "Colt", "Data Structure", "Algorithms"].sort(compareByStr)
);
