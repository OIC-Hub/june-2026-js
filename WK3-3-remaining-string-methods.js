let sentence1 = "I am going to school";
let split1 = sentence1.split(" ");
console.log(split1);

let split2 = sentence1.split("to");
console.log(split2);

console.log(sentence1.toUpperCase());
console.log(sentence1.toLowerCase());

let sentence2 = "   I am fine    ";
console.log(sentence2.length);
console.log(sentence2.trim().length);
console.log(sentence2.trimStart().length);
console.log(sentence2.trimEnd().length);

let num1 = "25";
console.log(num1.padStart(5, "0"));
console.log(num1.padEnd(5, "x"));
console.log(num1.repeat(4));




