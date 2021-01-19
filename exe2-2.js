const readlineSync = require("readline-sync");

let min = readlineSync.question("Your min number ? ");
let max = readlineSync.question("your max number ? ");
let current = readlineSync.question("Your current number ? ");
   if (((Number(current)) >= (Number(min)) ) && ((Number(current)) <= (Number(max))))  { 
    console.log(current + " is between " + min + " and " + max) }
   // else if ( min > max ) {
    //    alert("You dont understand anything !!! Exit now !!!");} 
    else {
    console.log(current + " is not between " + min + " and " + max)
}