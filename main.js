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



document.getElementById("playbutton").addEventListener("click", difficulty);
document.getElementById("optionbutton").addEventListener("click", options);
document.getElementById("dlcbutton").addEventListener("click", dlc);
document.getElementById("updatebutton").addEventListener("click", check_for_updates);
document.getElementById("exitbutton").addEventListener("click", exit);


function menu(){
let message = `Hi! Please make a selection:
1 - Play
2 - Options
3 - DLC
4 - Check for Updates
5 - Exit
`
let selection = Number(prompt(message));
if (selection == 1){
difficulty()
}
else if (selection == 2){
    options()
}
else if (selection == 3){
    dlc()
}
else if (selection == 4){
    check_for_updates()
}
else if (selection == 5){
    exit()
}
}



function difficulty(){
    let diff = `Please select difficulty:
    1 - Easy
    2 - Normal
    3 - Hard
    `
    let diffmode = Number(prompt(diff))
    if (diffmode == 1){
alert("Easy mode selected")
want_to_play()
    }
    else if (diffmode == 2){
        alert("Normal mode selected")
        want_to_play()
    }
    else  if (diffmode == 3){
        alert("Hard mode selected")
        want_to_play()
    }
}
function options(){
    alert("You selected Options.")
}
function dlc(){
    alert("No new DLC at this time.")
}
function check_for_updates(){
    alert("Everything is up to date.")
}
function exit(){
    alert("Bye")
}

function want_to_play() {
    let play_yn = prompt("Would you like to play? Yes=1 No=2");
    if (play_yn == "1") {
        document.body.style.backgroundColor = "black";
        ask_name()
    } else {
        gameover();
    }
}



function check_bgc(){
    if (document.body.style.backgroundColor = "black" === true){
        ask_name
    }
    }

function ask_name() {
    let person = prompt("Hello there what is your name?");
    if (person == "") {
        ask_name2();
    } else {
        let PlayerName = person;
        return PlayerName;
    }
}

function ask_name2() {
    let person2 = prompt("Umm... Hello? What is your name?");
    if (person2 == "") {
        ask_name3();
    } else {
        let PlayerName = person2;
        return PlayerName;
    }
}

function ask_name3() {
    let person3 = prompt("Ok if you don't tell me your name you will have to leave. So what is your name?");
    if (person3 == "") {
        gameover();
    } else {
        let PlayerName = person3;
        return PlayerName;
    }
}

function gameover() {
    window.location.href = 'game_over.jpg';
}

function playgame(){

}