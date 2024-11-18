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
document.getElementById("averagebutton").addEventListener("click", average);


let c=0
function ask_name() {
    let person = prompt("Hello there what is your name?");
    if (person == null) {
        return;
    } 
    if (person == "") {
        ask_name2();
    } 
    if (isNaN(person)) {
        let Name = person;
        return Name;
    }
    else {
        ask_name_num();
    }
}

function ask_name2() {
    let person2 = prompt("Umm... Hello? What is your name?");
    if (person2 == null) {
        return;
    } 
    if (person2 == "") {
        ask_name3();
    } 
    if (isNaN(person2)) {
        let Name = person2;
        return Name;
    }
    else {
        ask_name_num();
    }
}

function ask_name_num() {
    let person10 = prompt("That's not a name");
   
    if (person10 == null) {
        return;
    } 
    if (person10 == "") {
        ask_name3();
    } 
    
    if (isNaN(person10)) {
        let Name = person10;
        return Name;
    }
    
    else {
        if (c==3){
            let Name = person10;
            alert(`Ughh, you know what, fine your name is ${Name}🙄😒`)
        }
        else{
    counter()
    ask_name_num();

    }  
    }
}
function counter() {
c++
return c
}
function ask_name3() {
    let person3 = prompt("Bro just tell me your name");
    if (person3 == null) {
        return;
    } 
    if (person3 == "") {
        ask_name4();
    } else {
        let Name = person3;
        return Name;
    }
}
function ask_name4() {
    let person4 = prompt("😴");
    if (person4 == null) {
        return;
    } 
    if (person4 == "") {
        ask_name4();
    } else {
        let Name = person4;
        return Name;
    }
}



function average(){
    let n1= Number(prompt("Please enter value 1/5"))
    if (n1 == null) {
        return
    } 
    if (n1 == "") {
        return
        
    } 
    if (isNaN(n1)) {
        alert("Thats not a number")
        average()
        
    }
    else {
        let n2= Number(prompt("Please enter value 2/5"))
    if (n2 == null) {
        return;
    } 
    if (n2 == "") {
        return
    } 
    if (isNaN(n2)) {
        alert("Thats not a number")
        average()
    }
    else {
        let n3= Number(prompt("Please enter value 3/5"))
        if (n3 == null) {
            return;
        } 
        if (n3 == "") {
            return
        } 
        if (isNaN(n3)) {
            alert("Thats not a number")
            average()
        }
        else {
            let n4= Number(prompt("Please enter value 4/5"))
        if (n4 == null) {
            return;
        } 
        if (n4 == "") {
            return
        } 
        if (isNaN(n4)) {
            alert("Thats not a number")
            average()
        }
        else {
            let n5= Number(prompt("Please enter value 5/5"))
        if (n5 == null) {
            return;
        } 
        if (n5 == "") {
            return
        } 
        if (isNaN(n5)) {
            alert("Thats not a number")
            average()
        }
        else {
            let avg = (n1+n2+n3+n4+n5)/5
            alert(`The average is ${avg}`)
            return avg
        }
        }
        }
    }
    }
}

function random_until(min, max, stop){
    let rand_unt_counter=0
    if (max <= min){
        return -1
    }
    else if (stop < min) {
        return -1
    }
    else if (stop > max) {
        return -1
    }
    else {
        let n = Math.floor(Math.random() * (max - min + 1)) + min
        rand_unt_counter++
        if (n == stop){
            return 'it took ${rand_unt_counter} times for it to get ${stop}'
        }
        else {
            go back to line 214  
            }
        }
    }


