let even_predicat = function (value)
{
    /* check whether the value is even 
     (a number is even when the remainder of its division by 2 is equal to 0)
     return true if the value is even or false when the value is odd 
   */

     if(value % 2 ==0){
         return true;
     }
     else{
         return false;
     }
};

let odd_predicat = function (value)
{
    /*
    check whether the value is odd 
     return true if the value is odd or false when the value is even
    */ 
   if(value %2 == 1){
       return true;
   }
   else{
       return false;
   }
};

let undefined_predicate = function (value)
{
    /* 
        check and return a boolean value to indicate 
        whether the given value is undefined
         (be careful with the implicit coercion) 
    */
   if(value === undefined){
    return true;
   }
   else{
       return false;
   }

};

let null_predicate = function (value)
{
    /* 
        check and return a boolean value to indicate 
        whether the given value is null
         (be careful with the implicit coercion) 
    */
    if( value === null ){
        return true;
    }
    else{
        return false;
    }
};


//We're defining a function that takes predicate function to 'callback' 
// and a value to check using the given predicate
let check = function (predicat,value)
{
    return predicat(value);
    // apply the predicate to the value and return the result
};


// fix notes in the repo.
console.log(check(even_predicat,9));/* call the check function here to check whether 9 is even */
console.log(check(odd_predicat,9));/* call the check function here to check whether 9 is odd */
console.log(check(even_predicat,8));/* call the check function here to check whether 8 is even */
console.log(check(odd_predicat,8));/* call the check function here to check whether 8 is odd */
let x;
console.log(check(undefined_predicate,x));/* call the check function here to check whether x is undefined */
console.log(check(null_predicate,x));/* call the check function here to check whether x is null */
