let num1 = 45;
console.log(typeof num1);
let num2 = num1.toString();
console.log(typeof num2);

let num3 = 421.578292
console.log(num3.toFixed(3));
console.log(num3.toFixed(2));
console.log(num3.toFixed(7));


console.log(num3.toPrecision(3));
console.log(num3.toPrecision(2));
console.log(num3.toPrecision(7));

console.log(parseInt("23"));
console.log(parseInt("23.5"));

console.log(parseFloat("23"));
console.log(parseFloat("23.5"));

console.log(Number.isInteger(3.5));
console.log(Number.isInteger(35));
console.log(isNaN(34));
console.log(isNaN("34"));
console.log(isNaN("2a"));


let myForm = document.querySelector('#myForm');
myForm.addEventListener('submit', function(e){
    e.preventDefault();
    let year = document.querySelector('#year').value;
    let message = document.querySelector('#message');
    if(year === ""){
        message.innerHTML = "Enter year of birth";
    } else if(isNaN(year)){
        message.innerHTML = "Only input a number"
    } else {
        year = Number(year);
        if(!Number.isInteger(year)){
            message.innerHTML = "Invalid year. Only input integer"
        } else {
            let today = new Date();
            if(year > today.getFullYear()){
                message.innerHTML = "Invalid year. You cannot be born in the future"
            } else {
                let age = today.getFullYear() - year;
                message.innerHTML = `You are ${age} years old`;
            }
        }
    }
})