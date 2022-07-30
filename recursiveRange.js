/**RecursiveRange
 * Write a function called recursiveRange which accepts a number and adds up all the number from 0 to the number passed to the function
 SAMPLE INPUT/OUTPUT
recursiveRange(6) // 21
recursiveRange(10) // 55 

 */

function recursiveRange(num) {
  if (num === 0) return 0;
  return num + recursiveRange(num - 1);
}
console.log(recursiveRange(3));

/**
     recursiveRange(3) 
       return 3 + recursiveRange(3-1)
       return 3 + recursiveRange 2
  
     recursiveRange(2) 
       return 2 + recursiveRange(2-1)
       return 2 + recursiveRange(1)
  
     recursiveRange(1)
       return 1 + recursiveRange(1-1)
       return 1 + rescursiveRange(0)
          then rescursiveRange(0)=== 0 base case stops
           
                 recursiveRange(1)
                   return 1 + rescursiveRange(0) 
                   return 1 + 0 = 1
  
                         recursiveRange(2) 
                          return 2 + recursiveRange(1)
                          return 2 + 1 = 3
  
                              recursiveRange(3)
                                  return 3 + recursiveRange(3)
                                  retrun 3 + 3 = 6
  
                                  the final result is 6
  
   */
