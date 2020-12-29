/* 
FizzBuzz
Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions. For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead.

When you have that working, modify your program to print "FizzBuzz" for numbers that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz" for numbers divisible by only one of those).

(This is actually an interview question that has been claimed to weed out a significant percentage of programmer candidates. So if you solved it, your labor market value just went up.)
*/

// Solution 1

for (let num = 1; num <= 100; num++){
    if(num % 3 === 0 && num % 5 === 0){
        console.log("FizzBuzz");
    } else if (num % 3 === 0){
        console.log("Fizz")
    } else  if (num % 5 === 0){
        console.log("Buzz");
    } else {
        console.log(num);
    }
}

/* 
for loop will iterate until num <= 100
if num is divisible by 3 and by 5, we print "FizzBuzz"
else if num is divisible by just 3, we print "Fizz"
else if num is divisible by just 5, we print "Buzz"
else just print the num
*/

// Solution 2
for (let num = 1; num <= 100; num++){
    let output = "";
    
    if (num % 3 === 0){
        output += "Fizz"
    }
    
    if (num % 5 === 0){
        output += "Buzz"
    }
    
    console.log(output || num); 
}

/* 
for loop will iterate until num <= 100
we create an empty output variable which will hold our answer
if num is divisible by 3; then output = output + "Fizz" so output = "" + "Fizz" --> "Fizz"
if num is divisible by 5; then output = output + "Buzz" so output = "" + "Buzz" --> "Buz"
since JS is read from top to bottom, if both if statements are true 
output = "" + "Fizz" --> output = "Fizz"
output = "Fizz" + "Buzz" --> output = "FizzBuzz"
Fizz and buzz are concatenated 

if output = true (meaning its not an empty string), we print out the output OR (if its a number that is not divisible by 3, 5, or 3 and 5) we just print out the num
*/

// Solution 3
for (let num = 1; num <= 100; num++){
    console.log(
        (num % 3 === 0 ? "Fizz" : "") + (num % 5 === 0 ? "Buzz" : "") || num)
}

/* 

*/