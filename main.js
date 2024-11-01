/**
 * Unit 3 - Conditionals and Loops
 * ICS3 - Mr. Brash 🐿️
 * 
 * For this unit, Mr. Brash is trying something different. Each lesson will
 * be in this one repository, separated in the Lessons folder.
 * 
 * If you run into Git or Github issues, call Mr. Brash over.
 **/ 


'use strict';

/*** Event Listeners ***/



/*** Functions ***/

// A very accurate rounding function
function round(value, decimals) {
    let multiplier = 10**decimals;
    return Math.round((value + Number.EPSILON) * multiplier) / multiplier;
}

// Get a random number from min to max
function randInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


document.getElementById("playbutton").addEventListener("click", want_to_play);

function want_to_play() {
    let play_yn = prompt("Would you like to play? Yes=1 No=2")
    if (play_yn == "1") {
        addEventListener("click", ask_name)
    }
    if (play_yn == "2"){
        addEventListener("click", gameover)}
    if (play_yn == ""){
        addEventListener("click", gameover)}
}
function ask_name() {
    let person = prompt("Hello there what is your name?")
if (person == ""){
    addEventListener("click", ask_name2)
    }
    if (person)
    return person
    
}

function ask_name2() {
    let person2 = prompt("Umm... Hello? What is your name?")
if (person2 == ""){
    addEventListener("click", ask_name3)
    }
    if (person2)
    return person2
}
function ask_name3() {
    let person3 = prompt("Ok if you don't tell me your name you will have to leave. So what is your name?")
    if (person3 == ""){
    addEventListener("click", gameover)
    }
    if (person3)
    return person3
}
function gameover() {
    window.location.href='game_over.jpg'
}