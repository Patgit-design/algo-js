
 
let arr = [1, 2, 3, 4, 5]

function average(avrge) {
    let sumavrge = arr.reduce(function(a, b) { return a + b; }, 0) / arr.length;
    console.log("The average value of the array is: " + sumavrge);
}

function min(avrge) {
    let minimum = Math.min( ...arr );
    console.log ("The minimum value of the array is: " + minimum);
}

function max(avrge) {
    let maximum = Math.max( ...arr );
    console.log ("The maximum value of the array is: " + maximum);
}

average(arr);
min(arr);
max(arr);



/*



const readlineSync = require("readline-sync");

let min = 1; 
let max = 10;
let arr = [];
let i = 1;
let n = readlineSync.question("What is the length of your desired array? ");

function rand10(min, max) { 
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

function multiRand(n)  {
  while (i <= n) {
    rand10(min, max);
    i += 1;
    arr.push(rand10(min, max));
  }
}

function average(arr) {
    let sum = arr.reduce(function(a, b) { return a + b; }, 0);
    let average = sum / arr.length;
    console.log("The average value of your array is: " + average);
}

function min(arr) {
    let minimum = Math.min( ...arr );
    console.log ("The minimum value of your array is: " + minimum);
}

function max(arr) {
    let maximum = Math.max( ...arr );
    console.log ("The maximum value of your array is: " + maximum);
}

multiRand(n);

console.log("Your array is: " + arr);

average(arr);
min(arr);
max(arr);
*/
