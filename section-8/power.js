/**Power
 * Write a function called power which accepts a base and an exponent. The function should return the power of the base to the exponent. This function should mimic the functionlaity of Math.pow - do not worry about negstive bases and exponents. 
 power(2,0) // 1
 power(2,2) // 4
 power(2,4) // 16
 */

let base = 2;
let exponent = 3;
console.log(Math.pow(base, exponent));

function power(base, exponent) {
  if (exponent === 0)
    // console.log("All done");
    return 1; //or return true;
  //recursive call
  return base * power(base, exponent - 1);

  //step by step explantion
  //   return 2 * power(2, 3); => the result 2 * (2^3) = 16
  //     return 3,

  //   return 2 * power(2, 2); => 2 * (2^2) = 8
  //     return 2,

  //   return 2 * power(2, 1); => 2 * (2^1) = 4
  //     return 1,

  //   return 2 * power(2, 0); => 2 * (2^0) = 2
  //     return 3,
  //     return 0,
}
console.log(power(2, 4));
/**
 power(2, 4)
    return 2 * poswer(2, 4-1)
    return 2 * poswer(2, 3)
  
 power(2, 3)
    return 2 * power(2, 3-1)
    return 2 * power (2, 2 )
 
 power(2, 2)
    return 2 * power(2, 2-1)
    return 2 * power (2, 1 )
 
 power(2, 1)
    return 2 * power(2, 1-1)
    return 2 * power (2, 0 )
 
    since exponent === 0 base case stops then power(2, 0) = 1
     
      power(2, 1)
          return 2 * power (2, 0 )
          return 2 * 1 = 2
  
            power(2, 2)
             return 2 * power(2, 1)
             return 2 * 2 = 4
 
             power(2, 3)
              return 2 * power (2,2)
              return 2 * 4 = 8
                 
               power(2, 4) 
                 return 2 * power(2, 3)
                 return 2 * 8 = 16
                 This is the final resul = 16
 
 
  
 
  
  
  
  
  
  
  
  
  
   */
