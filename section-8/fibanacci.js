/**Fib or Fibanacci 
 Write a recrusive function called fib which accepts a number and returns the nth number in the Fibonacci sequence. Recall that the Fibonacci sequence is the sequence of whole numbers 1, 1, 2 ,3 ,5 ,8,.....which starts with 1 and 1 where every number thereafer is equal to the sum of the previous two numbers. 
fib(4) // 3
fib(7) // 13
fib(10) // 55
fib(28) // 317811
fib(35) // 9227465
 */

function fib(n) {
  if (n <= 2) return 1;
  return fib(n - 1) + fib(n - 2);
}
console.log(fib(7));

/**
   fib(7)
      return fib(7-1) + fib(7-2)
      return fib(6) + fib (5)
  
  fib(5)
      return fib(5-1) + fib(5-2)
      return fib(4) + fib(3)
  
  fib(3) 
      return fib(3-1) + fib(3-2)
      return fib(2) + fib(1)
      fib(2) or fib(1) <= 2 base case stops
  
          fib(3) 
              return fib(2) + fib(1)
              return 2+1 = 3
  
              fib(5)
                  return fib(4) + fib(3) 
                  return 4 + 3 = 7
  
  
                  fib(7)
                      return fib(7-1) + fib (5)
                      return 6 + 7 =13
                      so the final result is 13
  
   */
