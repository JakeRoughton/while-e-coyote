const prompt = require('prompt-sync')({sigint: true});


let str = String(prompt("Enter a single word: "))

let string = ''
while(string.length<10){
    string += str
}

console.log(string);
