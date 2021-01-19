const readlineSync = require("readline-sync");
let entier = new Number(readlineSync.question('Enter a number with decimal part?'));

let decimal = new Number(readlineSync.question('A second one?'));

let totalnombre = Math.floor(entier) * decimal;

console.log( totalnombre );