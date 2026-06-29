let myForm = document.getElementById('scoreForm');
let message = document.querySelector('#message');
// let myForm = document.querySelector('#scoreForm');
myForm.addEventListener('submit', function(e){
    e.preventDefault();
    let score = myForm['score'].value;
    
    if(score === ""){
        message.innerHTML = "Please input your score";
        message.classList.add('text-red-700');
        message.classList.remove('text-green-700')
    } else if(isNaN(score)){
        message.innerHTML = 'You are only allowed to input a number';
        message.classList.add('text-red-700');
        message.classList.remove('text-green-700')
    } else if(score < 0 || score > 100){
        message.innerHTML = 'You are only allowed to input between 0 and 100';
        message.classList.add('text-red-700');
        message.classList.remove('text-green-700')
    } else if(score >= 70){
        message.innerHTML = 'A';
        message.classList.add('text-green-700');
        message.classList.remove('text-red-700')
    } else if(score >= 60){
        message.innerHTML = 'B';
        message.classList.add('text-green-700');
        message.classList.remove('text-red-700')
    } else if(score >= 50){
        message.innerHTML = 'C';
        message.classList.add('text-green-700');
        message.classList.remove('text-red-700')
    } else if(score >= 45){
        message.innerHTML = 'D';
        message.classList.add('text-green-700');
        message.classList.remove('text-red-700')
    } else if(score >= 40){
        message.innerHTML = 'E';
        message.classList.add('text-green-700');
        message.classList.remove('text-red-700')
    } else {
        message.innerHTML = 'F';
        message.classList.add('text-green-700');
        message.classList.remove('text-red-700')
    }
})

let myForm2 = document.getElementById('scoreForm2');
let message2 = document.querySelector('#message2');
// let myForm2 = document.querySelector('#scoreForm2');
myForm2.addEventListener('submit', function(e){
    e.preventDefault();
    let score2 = myForm2['score2'].value;
    switch(true){
        case score2 === "":
            message2.innerHTML = "Please input your score";
            message2.classList.add('text-red-700');
            message2.classList.remove('text-green-700');
            break;
        case isNaN(score2):
            message2.innerHTML = 'You are only allowed to input a number';
            message2.classList.add('text-red-700');
            message2.classList.remove('text-green-700');
            break;
        case score2 < 0 || score2 > 100:
            message2.innerHTML = 'You are only allowed to input between 0 and 100';
            message2.classList.add('text-red-700');
            message2.classList.remove('text-green-700');
            break;
        case score2 >= 70:
            message2.innerHTML = 'A';
            message2.classList.add('text-green-700');
            message2.classList.remove('text-red-700');
            break;
        case score2 >= 60:
            message2.innerHTML = 'B';
            message2.classList.add('text-green-700');
            message2.classList.remove('text-red-700');
            break;
        case score2 >= 50:
            message2.innerHTML = 'C';
            message2.classList.add('text-green-700');
            message2.classList.remove('text-red-700');
            break;
        case score2 >= 45:
            message2.innerHTML = 'D';
            message2.classList.add('text-green-700');
            message2.classList.remove('text-red-700');
            break;
        case score2 >= 40:
            message2.innerHTML = 'E';
            message2.classList.add('text-green-700');
            message2.classList.remove('text-red-700');
            break;
        default:
            message2.innerHTML = 'F';
            message2.classList.add('text-green-700');
            message2.classList.remove('text-red-700');
            break;
    }
});

let colorForm = document.getElementById('colorForm');
let message3 = document.getElementById('message3');
colorForm.addEventListener('submit', function(e){
    e.preventDefault();
    let color = colorForm['color'].value;
    switch(color){
        case "":
            message3.innerHTML = "Enter something abeg";
            break;
        case "green":
            message3.innerHTML = "Go";
            break;
        case "yellow":
            message3.innerHTML = "Get ready";
            break;
        case "red":
            message3.innerHTML = "Stop";
            break;
        default:
            message3.innerHTML = "Invalid color";
    }
})