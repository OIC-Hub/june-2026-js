let sentence1 = "I am going to school.";
console.log("Length is", sentence1.length);

let sentence2 = "I am going to school.    ";
console.log("Length is", sentence2.length);

console.log("Char at 3 is", sentence1.charCodeAt(3));

let firstname = "Sola";
let lastName = "Sumonu";
console.log("Concat", firstname.concat(lastName));
console.log("Concat", firstname.concat(" ", lastName));

console.log("Index of i is", sentence1.indexOf("i"));
console.log("Index of g is", sentence1.indexOf("g"));
console.log("Index of p is", sentence1.indexOf("p"));

console.log("Last Index of i is", sentence1.lastIndexOf("i"));
console.log("Last Index of g is", sentence1.lastIndexOf("g"));

let sentence3 = "Olu is very stubborn and Olu is also hardworking.";
let newSentence = sentence3.replace("Olu", "Tayo");
console.log("Replace:", newSentence);

let newSentence2 = sentence3.replace(/oLu/i, "Tayo");
console.log(newSentence2);

let newSentence3 = sentence3.replaceAll("Olu", "Tayo");
console.log("Replace All:", newSentence3);

let sentence4 = "Oga Niyi is so nice and gentle.";
let slice1 = sentence4.slice(2);
console.log(slice1);

let slice2 = sentence4.slice(2, 10)
console.log(slice2);

let slice3 = sentence4.slice(4, 17)
console.log(slice3);

let slice4 = sentence4.slice(3, 20)
console.log(slice4);

let slice5 = sentence4.slice(8, 15)
console.log(slice5);

let sentence5 = "Oga Niyi is so nice and gentle.";
let slice6 = sentence5.slice(-5);
console.log(slice6);

let slice7 = sentence5.slice(5, -2);
console.log(slice7);

// substring is the same as slice just that it does not accept negative values
let substring1 = sentence5.substring(2);
console.log(substring1);

let substring2 = sentence5.substring(2, 10)
console.log(substring2);

let substring3 = sentence5.substring(4, 17)
console.log(substring3);

let substring4 = sentence5.substring(-5);
console.log(substring4);

let sentence6 = "I am going to school";
let substr1 = sentence6.substr(3);
console.log(substr1);

let substr2 = sentence6.substr(3, 7);
console.log(substr2);






