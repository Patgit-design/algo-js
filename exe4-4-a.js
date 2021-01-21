
 
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



