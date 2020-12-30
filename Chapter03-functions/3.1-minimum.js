/*
Minimum
The previous chapter introduced the standard function Math.min that returns its smallest argument. We can build something like that now. Write a function min that takes two arguments and returns their minimum.
*/


// Solution 1
function min(a, b) {
    if (a < b) return a;
    else return b;
  }

  /*
  this function has two parameters: a and b
  if a is less than b, then it is the min value and we return a
  else if b is the min valu and we return that
*/
//   Solution 2 with Math.min and arrow function

const min = (a, b) => {
    return Math.min(a,b) 
}

const min = (a, b) => Math.min(a,b) 


/* 
Math.min([value1[, value2[, ...]]])
console.log(Math.min(2, 3, 1));
// expected output: 1
*/
