const prompt = require('prompt-sync')({sigint: true});

/*
-`prompt-sync` to get input from the user
-`while` loop
-Allows user to input multiple numbers
-Print out the sum at the end: variable to hold the sum
-`+=` to add to our sum
-reprompt inside the `while` loop
*/

let num = Number(prompt("Enter some numbers (type 0 when complete): "));

let sum = 0;

while(num != 0){
    
    sum += num;
    num = Number(prompt('> '))
}

console.log(sum);