/* 
Reversing an array
Arrays have a reverse method that changes the array by inverting the order in which its elements appear. For this exercise, write two functions, reverseArray and reverseArrayInPlace. The first, reverseArray, takes an array as argument and produces a new array that has the same elements in the inverse order. The second, reverseArrayInPlace, does what the reverse method does: it modifies the array given as argument by reversing its elements. Neither may use the standard reverse method.

Thinking back to the notes about side effects and pure functions in the previous chapter, which variant do you expect to be useful in more situations? Which one runs faster?
*/

//solution one for reverseArray 
let reverseArray = (arr) => {
    result = [];
    for(let i = 0; i < arr.length; i++){ 
        result.unshift(arr[i]) //unshift adds number to beginning of array
    }
return result;
}

//solution two for reverseArray -- book uses this one
reverseArray = (arr) => {
    let result = []
    for(let i = arr.length - 1; i >= 0; i--){
         result.push(arr[i]); //push adds number to end of array 
       }
     return result;
   }



//solution for reverseArrayInPlace function (from book)
function reverseArrayInPlace(array) { //passing in: [1, 2, 3, 4, 5];
for (let i = 0; i < Math.floor(array.length / 2); i++) { //loops the array from 0 to half of the array (rounded to lower number), increases i by one each time; example: array length = 5, so 5/2 = 2.5, this gets rounded to 2; so while i < 2 keep looping;
  let old = array[i]; //temporarily stores the current value of the array at the position i in the variable old. //array[0] = 1
    array[i] = array[array.length - 1 - i]; //sets the value of the i position to the value of the last element of the array minus the current i. 
    //so array[0] = array[5-1-0]; array[0] = array[4]; array[0] = 5 
    array[array.length - 1 - i] = old; //sets the value of the last element of the array minus the current i to the previous value (stored in the old variable). //array[array.length - 1 - i] = old --> array[5 - 1 - 0] = old --> array[4] = old --> array[4] = 1
    } //array after first iteration: [5,2,3,4,1]
return array;
}
  
  console.log(reverseArray(["A", "B", "C"]));
  // → ["C", "B", "A"];
  let arrayValue = [1, 2, 3, 4, 5];
  reverseArrayInPlace(arrayValue);
  console.log(arrayValue);
  // → [5, 4, 3, 2, 1]


  /*

  //second iteration 

  function reverseArrayInPlace(array) { //passing in: [1, 2, 3, 4, 5];
    for (let i = 1; i < 2; i++) { //loops the array from 0 to half of the array (rounded to lower number), increases i by one each time; example: array length = 5, so 5/2 = 2.5, this gets rounded to 2; so while i < 2 keep looping;
      let old = array[1]; //temporarily stores the current value of the array at the position i in the variable old. //array[1] = 2
        array[1] = array[5 - 1 - 1]; //sets the value of the i position to the value of the last element of the array minus the current i. 
        //so array[1] = array[5-1-1]; array[1] = array[3]; array[1] = 4
        array[array.length - 1 - i] = old; //sets the value of the last element of the array minus the current i to the previous value (stored in the old variable). //array[array.length - 1 - i] = old --> array[5 - 1 - 1] = old --> array[3] = old --> array[3] = 2
        } //array after second iteration: [5,4,3,2,1]
    return array;
    }
    */