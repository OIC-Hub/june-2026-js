// const Num = [1, 2, 3, 4, 5]
// console.log(Num[0])
// console.log(Num[1])


// for(i = 0; i <= 10; i++){
//     console.log(i)
// }

// for(i=5; i > 1; i--){
//     console.log(i)
// }


const fruits = ["mango", "apple", "watermelon"]

// for(i = 0; i < fruits.length; i++){
//     console.log(i)
// }

for(let fruit of fruits){
    console.log(fruit)
}

// let num = false

// for(let odd of num){
//     console.log(odd)
// }


let lives = 3;

while (lives > 0) {
  console.log("Playing... lives left: " + lives);
  lives--; // lose a life
}

console.log("Game over!");


const names = ["Ada", "Grace", "Alan"];

// names.forEach(function(name) {
//   console.log("Hello, " + name);
// });

names.forEach((name, index) => {
    console.log(`student ${index + 1} ${name}`)
})


const person = {
  name: "Ada",
  age: 25,
  city: "Lagos"
};

for(let key in person){
    console.log(key + ":" + person[key])
}