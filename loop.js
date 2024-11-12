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


document.getElementById("namebutton").addEventListener("click", ask_name);
document.getElementById("optionbutton").addEventListener("click", options);



function ask_name() {
    let person = prompt("Hello there what is your name?");
    if (person == "") {
        ask_name2();
    } 
    if (Number(person)) {
        ask_name_num();
    }
    else {
        let Name = person;
        return Name;
    }
}

function ask_name2() {
    let person2 = prompt("Umm... Hello? What is your name?");
    if (person2 == "") {
        ask_name3();
    } 
    if (Number(person2)) {
        ask_name_num();
    }
    else {
        let Name = person2;
        return Name;
    }
}

function ask_name_num() {
    let person10 = prompt("That's not a name");
    if (person10 == "") {
        ask_name3();
    } 
    
    if (Number(person10)) {
        
        ask_name_num();
    }
    else {
        let Name = person10;
        return Name;
    }
}
function ask_name3() {
    let person3 = prompt("Bro just tell me your name");
    if (person3 == "") {
        ask_name4();
    } else {
        let Name = person3;
        return Name;
    }
}
function ask_name4() {
    let person4 = prompt("😴");
    if (person4 == "") {
        ask_name4();
    } else {
        let Name = person4;
        return Name;
    }
}

function gameover() {
    window.location.href = 'game_over.jpg';
}

function playgame(){

}


