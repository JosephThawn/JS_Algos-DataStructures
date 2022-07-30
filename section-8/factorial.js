/**Factorial
 * Write a function facotrial which accepts a number and returns the factorial of that number. Afactorial is the product of an integer and all the integers belwo it e.g facotorail four (4!) is qual to 24, because 4 * 3 * 2 * 1 eaula 24. factorial zero(0!) is always 1
factorial(1) // 1
factorial(2) // 2
factorial(4) // 24
factorial(7) // 5040
 */

function factorial(x) {
  if (x < 0) return 0;
  if (x <= 1) return 1;
  return x * factorial(x - 1);

  /**
  
  
     factorial(4)
     return 4 * factorial(4-1)
        return 3
  
     factorial(3)
     return 3 * factorial(3-1)
        return 4 * 4 = 16
  
     factorial(2)
     return 2 * factorial(2-1)
         return 1 this is the end; base case stops
         then 2 * 1 = 2
  
           factorial(3)
              return 3 * factor(2) or 2 = 6
  
              factorial(4)
                  return 4 * foctorial(3) 0r 6 = 24
  
                  the final result is 24
     */
}

console.log(factorial(4));
