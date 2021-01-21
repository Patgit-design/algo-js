



const readlineSync = require("readline-sync");

let min = 1; 
let max = 10;
let arr = [];
let i = 1;
let n = readlineSync.question("What is the length of your desired array? ");

function rand10(a , b) { 
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

function multiRand(b)  {
  while (i <= n) {
    rand10(min, max);
    i += 1;
    arr.push(rand10(min, max));
  }
}

function average(avrge) {
    let sumavrge = arr.reduce(function(a, b) { return a + b; }, 0) / arr.length;
    console.log("The average value of your array is: " + sumavrge);
}

function miN(a , b) {
    let minimum = Math.min( ...arr );
    console.log ("The minimum value of your array is: " + minimum);
}

function maX(a , b) {
    let maximum = Math.max( ...arr );
    console.log ("The maximum value of your array is: " + maximum);
}

multiRand(n);

console.log("Your array is: " + arr);

average(arr);
miN(arr);
maX(arr);

