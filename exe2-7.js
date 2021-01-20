const readlineSync = require("readline-sync");
let num = readlineSync.question("Enter a number: ");
let i = 1;
let sum = 0;

while (i <= num) {
   let enter = readlineSync.question("Enter a new number: ");
    i += 1;
    sum += Number (enter);
  }

 console.log(sum);