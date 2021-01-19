const readlineSync = require("readline-sync");
let number1 = new Number(readlineSync.question('Enter a number ?'));

let number2 = new Number(readlineSync.question('A second one?'));

let totalnumber = number1 % number2;

console.log( totalnumber );