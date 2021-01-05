/*
The introduction of this book alluded to the following as a nice way to compute the sum of a range of numbers:

console.log(sum(range(1, 10)));
Write a range function that takes two arguments, start and end, and returns an array containing all the numbers from start up to (and including) end.

Next, write a sum function that takes an array of numbers and returns the sum of these numbers. Run the example program and see whether it does indeed return 55.

As a bonus assignment, modify your range function to take an optional third argument that indicates the “step” value used when building the array. If no step is given, the elements go up by increments of one, corresponding to the old behavior. The function call range(1, 10, 2) should return [1, 3, 5, 7, 9]. Make sure it also works with negative step values so that range(5, 2, -1) produces [5, 4, 3, 2].

*/

//solution: 
//range function with while loop
//with out step, just a function that takes two numbers and returns an arr with all those numbers
let range = (start, end) => {
    let arr = []; //create an empty array so we can push our values in here
    let count = start // set up a counter to keep track of our numbers, it will start off being equal to our start number
    while(count <= end){ //while the count is less than or equal to the end, we keep loooping
        arr.push(count);// as we loop we push the current count into the arr
        count+= 1 //then we increase our count by 1
    }
    return arr //finally return the array 
}

//range function with for loop 
let range = (start, end) => {
    arr = [];
    for(let i = start; i <= end; i++){
        arr.push(i)
    }
    return arr;
}


//sum function with while loop
var sum = (arr) => { //function sum takes in an arr of values as argument
    var total = 0; //set variable total to = 0
    while(arr.length > 0){ //while the length of our array is > 0 we loop!
        total = total + arr.pop(); //total = the current total + the value we get from arr.pop() -- this is taking last number of the arr, keeping its value and removing it from the arr.. so with the example below: total = 0 + 10 ... we do this until all items in arr are popped off 
    }
    return total;
}
console.log(sum([1, 2, 10]));
//13

//sum function with for loop
var sum = (arr) => {
    var total = 0;
    for (let i = 0; i < arr.length; i++){
        total = total + arr[i];
    }
    return total 
}

//range function with third argument: step 
let range = (2, 10, 2) => {
let range = (start, end, step) => {
    let arr=[];
    if(step > 0){
      for(var i = start; i <= end; i += step){
        arr.push(i);
      }
    }
    else if(step < 0) {
      for(var i = start; i >= end; i += step){
        arr.push(i);
      }
    }
    else {
       for(var i = start; i <= end; i++){
        arr.push(i);
      }    
    }
    return arr;
  }