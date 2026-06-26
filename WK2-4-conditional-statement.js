function changeUpper(elem){
    elem.value = elem.value.toUpperCase();
}

let age = 10;
if(age >= 18){
    console.log("You are an adult");
}

let age2 = 12;
if(age2 >= 18){
    console.log("You are an adult");
} else {
    console.log("You are a minor");   
}

document.getElementById('google').addEventListener('click', function(e){
    e.preventDefault();
})

let ageForm = document.querySelector('#ageForm');
ageForm.addEventListener('submit', function(event){
    event.preventDefault();
    // console.log("Form submitted");
    let userAge = document.getElementById('userAge');
    let display = document.getElementById('ageDisplay');
    if(userAge.value == ""){
        display.innerHTML = "Please enter this field";
        display.style.color = "red";
        return;
    }

    if(userAge.value >= 18){
        display.innerHTML = "You are an adult";
        display.style.color = "green";
    } else {
        display.innerHTML = "You are a minor";
        display.style.color = "green";
    }
})