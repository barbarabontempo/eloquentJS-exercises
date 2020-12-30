/* 
Recursion
We’ve seen that % (the remainder operator) can be used to test whether a number is even or odd by using % 2 to see whether it’s divisible by two. Here’s another way to define whether a positive whole number is even or odd:

Zero is even.

One is odd.

For any other number N, its evenness is the same as N - 2.

Define a recursive function isEven corresponding to this description. The function should accept a single parameter (a positive, whole number) and return a Boolean.

Test it on 50 and 75. See how it behaves on -1. Why? Can you think of a way to fix this?
*/

// solution 1
const isEven = (n) => {

    if (n < 0){
        n = Math.abs(n)
    }
    if(n === 0){
        return true;
    }

    if(n === 1){
        return false;
    }

    return isEven(n-2);
}

// books solution: 
function isEven(n) {
    if (n == 0) return true;
    else if (n == 1) return false;
    else if (n < 0) return isEven(-n);
    else return isEven(n - 2);
  }


/*


This below: is our base case (the two if statements)
we will recurse until we get to a situation until n is either 0 or 1
however if n is not 0 or 1, we want to apply isEven to whatever our number is - 2. 

const isEven = (n) => {
  //if n is 0
  	//return true
 //if n is 1
  //return false 
  //in all other cases apply isEven to n-2

}

if we have negative 1  as n this will crash; it will recurse infintely 
so this is an edgecase! what is the input is negative? 
if (n < 0){
    //make n not negative! 
    //n = -n (assigning it to opposite value)
    or 
    //n = Math.abs(n) -- this gets the absolute value of n
}




*/