const readlineSync = require("readline-sync");
let rectwi = readlineSync.question("Enter the width of the rectangle: ");
let recthe = readlineSync.question("Enter the height of the rectangle: ");


function calcSurface(width, height) {
    return width * height;
  }
  
  console.log(calcSurface(rectwi, recthe));
