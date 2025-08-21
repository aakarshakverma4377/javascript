// /*-------------------------------------------------------------------------------------------------------
// /*------------------------------------------- Practice Question 1 ---------------------------------------
// /*-------------------------------------------------------------------------------------------------------
// Q1. Create a variable of type string and try to add a number to it.
//  let a = "Aakarshak"
//  let b = 6
//  console.log(a + b)
//
// Q2. Use type of operator to find the datatype of the string in last question.
// console.log(typeof (a+b))
//
//  Q3. Create a const object in javascript. Can you change it to hold a number later?
// const a = {
//     name: "Aakarshak",
//     section: 1,
//     isPrincipal: false,
// }
// console.log(a.isPrincipal)
//
// Q4 Try to add a new key to the const object in problem 3. Were you able to do it?
// a['friend'] = "Shubham"
// a['name'] = "Lovish"
// console.log(a)
//
// Q5. Write a js program to create a word-meaning dictionary of 5 words.
// const dict = {
//     Obfuscate: "to make something confusing or unclear",
//     Ephemeral: "lasting for a very short time",
//     Ubiquitous: "found everywhere, very common",
//     Cacophony: "a loud, unpleasant mix of sounds",
//     Magnanimous: "kind and forgiving, especially to others",
// }
// console.log(dict.Obfuscate)
// console.log(dict['Cacophony'])

// /*-------------------------------------------------------------------------------------------------------
// /*------------------------------------------- Practice Question 2 ---------------------------------------
// /*-------------------------------------------------------------------------------------------------------

// Q1. Use logical operators to find weather the age of a person lies between 10 and 20?
// const prompt = require('prompt-sync')();
// let age = parseInt(prompt("What is your age?"));
// if(age>10 && age<20){
//     console.log("your age lies between 10 and 20")
// }
// else{
//     console.log("Your age doesn't lies between 10 and 20");
// }

// Q2. Demonstrate the use of switch case statement in javascript
// const prompt = require('prompt-sync')();
// let age = prompt("What is your age?");
// switch (age) {
//     case "12":
//         console.log("Your age is 12");
//         break;
//     case "13":
//         console.log("Your age is 13");
//         break;
//     case "14":
//         console.log("Your age is 14");
//         break;
//     case "15":
//         console.log("Your age is 15");
//         break;
//     default:
//         console.log("Your age is not special");
// }

// Q3. Write a js program to find weather a number is divisible by 2 and 3
// const prompt = require('prompt-sync')();
// let num = prompt("What is your number?");
// num = Number.parseInt(num);
// if(num % 2 == 0 && num % 3 == 0) {
//     console.log("Your number is divisible by 2 and 3");
// }
// else{
//     console.log("Your number is not divisible by 2 and 3");
// }

// Q4. Write a js program to find weather a number is divisible by either 2 and 3
// const prompt = require('prompt-sync')();
// let num = prompt("What is your number?");
// num = Number.parseInt(num);
// if(num % 2 == 0 || num % 3 == 0) {
//     console.log("Your number is divisible by 2 and 3");
// }
// else{
//     console.log("Your number is not divisible by 2 and 3");
// }

// Q5. Print "you can drive" or "you cannot drive" based on age being greater than 18 using ternary operator
const prompt = require('prompt-sync')();
let age = prompt("What is your age?");
let message = (age >= 18) ? "you can drive" : "you cannot drive."
console.log(message)