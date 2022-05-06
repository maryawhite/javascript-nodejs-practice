"use strict"

function calculateAge(dateString) {
    let today = new Date();
    let myBday = new Date(dateString);
    let age = today.getFullYear() - myBday.getFullYear();
    let mon = today.getMonth() - myBday.getMonth();
    //this if statement will account for the fact that your birthday may not have happened yet this year
    if(mon < 0 || (mon === 0 & today.getDate() < myBday.getDate())) {
        age--;
    }
    return age;
}
//the dateString should be in the format "yyyy-MM-dd"
console.log(calculateAge("1984-12-15"));
console.log(calculateAge("1948-12-15"));

//to run this using node, use the terminal to navigate to the correct directory, then type node age.js

//Alternative method, if you don't want to use a date String, you can use year, month, day as follows:
function calculateAgeV2(y, m, d) {
    let today = new Date();
    let bDay = new Date(y, m, d)
    let age = today.getFullYear() - bDay.getFullYear();
    let mon = today.getMonth() - bDay.getMonth();
    //this if statement will account for the fact that your birthday may not have happened yet this year
    if(mon < 0 || (mon === 0 & today.getDate() < bDay.getDate())) {
        age--;
    }
    return age;
}
//input should be in the format yyyy, MM, dd
console.log("-------------------------");
console.log(calculateAgeV2(1984, 12, 15));
console.log(calculateAgeV2(1948, 12, 15));