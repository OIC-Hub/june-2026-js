const person = {
    name: "Oga Niyi",
    age: 10,
    'complexion': "caramel",
    height: "176cm",
    sing: function(){
        return "I still see your shadows in my room";
    },
    time: function(){
        let today = new Date();
        return `The present time is ${today.getHours()}:${today.getMinutes()}`
    },
    getAge: function(year){
        let today = new Date();
        let age = today.getFullYear() - year;
        return `You are ${age} years old`;
    },
    getDetails: function(){
        return `Your name is ${this.name} and you are ${this.complexion} in complexion`
    }
}

console.log(typeof person);
console.log(person.name);
console.log(person['age']);

person.age = 11;
console.log(person['age']);

person['height'] = "180cm";
console.log(person.height);
console.log(person.sing());

const today = new Date();
console.log(today);
// get the present year
console.log(today.getFullYear());

// get the present month
console.log(today.getMonth());

// get the present date
console.log(today.getDate());

// get day
console.log(today.getDay());

// get present hour
console.log(today.getHours());

// present minutes
console.log(today.getMinutes());

// present seconds
console.log(today.getSeconds());


console.log(person.time());

let userYear = prompt("Enter your year");
console.log(person.getAge(userYear));

document.getElementById('age').innerHTML = person.getAge(userYear);


console.log(person.getDetails());



