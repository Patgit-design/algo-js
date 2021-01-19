const readlineSync = require("readline-sync");
let shoesize = new Number(readlineSync.question('What is your shoes size ?'));

let birthy = new Number(readlineSync.question('And your birthyear?'));

let result= (shoesize * 2 + 5) * 50 - birthy + 1766;
console.log(result);