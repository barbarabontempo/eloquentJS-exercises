/*
Bean counting
You can get the Nth character, or letter, from a string by writing "string"[N]. The returned value will be a string containing only one character (for example, "b"). The first character has position 0, which causes the last one to be found at position string.length - 1. In other words, a two-character string has length 2, and its characters have positions 0 and 1.

Write a function countBs that takes a string as its only argument and returns a number that indicates how many uppercase “B” characters there are in the string.

Next, write a function called countChar that behaves like countBs, except it takes a second argument that indicates the character that is to be counted (rather than counting only uppercase “B” characters). Rewrite countBs to make use of this new function.
*/


// solution 1

function countBs(str){
 //return a call to countChar with input and "b"
 return countChar(str, "B")
}


function countChar(str, char){
    let result = 0
        for(let i = 0; i < str.length; i++){
            if(str[i] === char){
                result += 1;
            }
        }
        return result
    }

/*
// solution 1 with psuedocode 
function countBs(str){
    //create a result variable and set to 0
      //loop over the str
          //if current character is a "B"
              //increment result by 1
      
    //return that result  
      
    }
function countChar(str, char){
    //create a result variable and set to 0
      //loop over the str
          //if current character is = char
              //increment result by 1
      
    //return that result  
      
    }

*/