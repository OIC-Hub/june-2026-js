function convertToSec(minutes){
    let sec = minutes * 60;
    return sec;
}

let sec1 = convertToSec(2);
console.log(sec1);

// let userInput = prompt("Enter the minutes you want to convert");
// let sec2 = convertToSec(userInput);
// console.log(`The result of converting ${userInput}minutes to seconds is ${sec2}seconds`);

function addition(a, b){
    return a + b;
}

let num1 = Number(prompt("Enter first number"));
let num2 = parseFloat(prompt("Enter second number"));
let add1 = addition(num1, num2);
console.log(`The addition of ${num1} and ${num2} is ${add1}`);
