// Write a loop that makes seven calls to console.log to output the following triangle:

// #
// ##
// ###
// ####
// #####
// ######
// #######
// It may be useful to know that you can find the length of a string by writing .length after it.


for(let triangle = "#"; triangle.length <= 7; triangle += "#"){
    console.log(triangle)
} 

/*

Explained:

for(starting value; conditionto stop looping; adjustment per iteration;)
.length --> count how many characters there are in that string
We use .length because "#" is a string
We want to compare apples to apples, so by doing .length it gives us back a number (the length of that string), and we are able to compare a number with a number (the length of a string and 7)

triangle += "#" is the same as triangle = triangle + "#"

*/