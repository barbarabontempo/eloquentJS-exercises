/* 
Chessboard
Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. At each position of the grid there is either a space or a "#" character. The characters should form a chessboard.

Passing this string to console.log should show something like this:

 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # #
When you have a program that generates this pattern, define a binding size = 8 and change the program so that it works for any size, outputting a grid of the given width and height.
*/

let size = 8;
let board = "";

for (let y = 0; y < size; y++){
    for (let x = 0; x < size; x++){
        if ((x + y) % 2 === 0){
            board += " ";
        } else {
            board += "#"
        }
    }
    board += "\n"
}


/* 
//first we set the variables size and board 

let size = 8; //sets a limit for the iterations to be used in our loop
let board = ""; // sets a blank palceholder to be filled with our if statements

for (let y = 0; y < size; y++){
    //the first for loop: y represents the vertical axis and in this case, the rows... this creates loop for rows 

    for (let x = 0; x < size; x++){
        //second loop: x represnts the horizontal axis, the columns. this creates the for loop for the columns

        this is a for loop INSIDE another for loop (not great time complexity, O(n^2)

        //the "for loop of x" must complete its entire run from 0-8 before the "y loop" can start its enxt loop where y++

        if ((x + y) % 2 === 0){
            board += " ";
            //when we set x + y, every second number will be divisble by 2
            //so every second character will execute the " " space character,
            and each new line will alternate between an even/odd number


        } else {
            board += "#"
            //if the condition above is not met, then we perform this action instead
            //for every other number not divisble by 2, "#" will be executed
        }
    }
    board += "\n"
    \n creates a new line 
    so board = board + "\n"
    this statement is attached to the "y for loop" (the first one), it ensures that the x loop will run 8 characters across, before breaking a new line
}

*/ 