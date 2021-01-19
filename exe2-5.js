const readlineSync = require("readline-sync"); 
let number = readlineSync.question('What is your favorite number?');

while ((Number(number)) != 42) {
    console.log("Are you sure ?");
    number = readlineSync.question("What is your favorite number ?");
}

console.log ("this is mine too");