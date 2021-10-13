let powerOf = function (power) {
    /*
        Create and return an inner function that receives a value 
        and return the result of raising it to the power set through the outer function

    */
   let powerInner = function(value)
 {
     return Math.pow(value,power)
 }  
return powerInner;
};

let powerOfTwo= powerOf(2); // set this variable to a closure that would raise any value to two.

let powerOfTen= powerOf(10); // set this variable to a closure that would raise any value to ten.


// DO NOT change the lines below
console.log(powerOfTwo(3));
console.log(powerOfTen(3));
