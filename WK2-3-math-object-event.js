console.log(Math.E);
console.log(Math.LN10);
console.log(Math.LN2);
console.log(Math.log(70));
console.log(Math.PI);
console.log(Math.SQRT1_2);
console.log(Math.SQRT2);
console.log(Math.sqrt(2));
console.log(Math.sqrt(16));
console.log(Math.abs(5));
console.log(Math.abs(-9));
console.log(Math.ceil(2.1));
console.log(Math.ceil(2.8));
console.log(Math.floor(2.9));
console.log(Math.floor(2.1));
console.log(Math.round(2.6));
console.log(Math.round(2.4));
console.log(Math.pow(2, 3));
console.log(Math.max(2, 5, 1, 90, 66));
console.log(Math.min(2, 5, 1, 90, 66));
console.log(Math.random());
console.log(Math.floor(Math.random() * 10 + 1));
console.log(Math.floor(Math.random() * 11 + 10));

function generateRandom(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min)
}

console.log(generateRandom(1000, 9999));

let firstNum = prompt("Enter the minimum boundary");
let secondNum = prompt("Enter the maximum boundary");

let luckyNumber = generateRandom(Number(firstNum), Number(secondNum));

document.getElementById('result').innerHTML = `Your lucky number is ${luckyNumber}`;

function mouseOverMe(){
    // alert("Yaaaayyyyyyyy");
    document.getElementById('elem').style.color = "red";
}

function mouseOutMe(element){
    // console.log(element);
    element.style.color = "black";
    element.style.fontSize = "20px";
}