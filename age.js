"use strict"

function calculateAge(dateString) {
    let today = new Date();
    let myBday = new Date("1984-12-18");
    let age = today.getFullYear() - myBday.getFullYear();
    let mon = today.getMonth() - myBday.getMonth();
    //this if statement will account for the fact that your birthday may not have happened yet this year
    if(mon < 0 || (mon === 0 & today.getDate() < myBday.getDate())) {
        age--;
    }
    return age;
}

console.log(calculateAge("1984-12-18"));

//to run this using node, use the terminal to navigate to the correct directory, then type node age.js