const readlineSync = require("readline-sync");

let min = 1;
let max = 10;
let arr = [];
let i = 1;
let n = readlineSync.question("How much random numbers will you? ");

function rand10(min, max) {

return Math.floor(Math.random() * (max - min + 1) + min);
}

function multiRand(n)  {
    while (i <= n) {
      rand10(min, max);
      i += 1;
      arr.push(rand10(min, max));
    }}
    multiRand(n);
 
    
    console.log("Your random number(s) is (are): " + arr);