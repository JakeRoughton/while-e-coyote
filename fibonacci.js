const prompt = require('prompt-sync')({sigint: true});

    let num = Number(prompt("Enter your starting number: "))
    let num1 = 0
    let num2 = 1
    let burrito = Number()
    let i =0

    while(i < num){
        if (i===0){
            console.log(0);
        }    else if ( i === 1){
                console.log(1);
            } else{
                burrito = num1 + num2;
                console.log(num1 + num2);
                num1 = num2;
                num2 = burrito;
            }
            i++;
        }