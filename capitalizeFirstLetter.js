"use strict"

//write a function that capitalizes the first letter of a single word
function capitalizeFirstLetter(inputString) {
    let firstLetter = inputString.charAt(0).toUpperCase();
    return firstLetter + inputString.substring(1);
}

// console.log(capitalizeFirstLetter("mary"));

//write a function that capitalizes the first letter of every word in a string
function capitalizeEachWord(input) {
    let str = input.split(" ");
    let answer = "";
    for(let i = 0; i < str.length; i++) {
        answer += capitalizeFirstLetter(str[i]) + " ";
    }
        return answer;
}

console.log(capitalizeEachWord("mary had a little lamb"));
console.log(capitalizeEachWord("anne rice"));
console.log(capitalizeEachWord("j r r tolkien"));