const prompt = require('prompt-sync')({sigint: true});

let n = Number(prompt("Enter a number"));
let num1 = 0;
let num2 = 1;
let i = 0;
let newNum;
while (i < n) {
    if (i === 0) {
        console.log(i);
    } else if(i === 1){
        console.log(i);
    } else{
        newNum = num1 + num2
        console.log("newNum is ", newNum);
        num1 = num2
        num2 = newNum
    }
    i++
}