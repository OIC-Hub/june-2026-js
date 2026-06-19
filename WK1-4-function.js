let sentence1 = 2 + 3 + "Tunde";
console.log(sentence1);

console.log(2 + "Tunde" + 3 + 7);

function greeting(){
    alert("Good afternoon");
}

function sum(num1, num2){
    console.log(num1 + num2); 
}

sum(10, 15);
sum(20, 5);
sum(1, 2);
sum(4, 8);
sum(11, 99);
sum(10, 155);

function product(a, b, c){
    let multiply = a * b * c;
    return multiply;
}

let result = product(2, 4, 5);
console.log(result);

let myNum = 20;
{
    myNum = 10;
    console.log(myNum);
}

console.log(myNum);

let display = document.getElementById('output');
function addInput(input){
    // alert(`Clicked ${input}`);
    display.value += input;
}

function displayResult(){
    display.value = eval(display.value)
}
