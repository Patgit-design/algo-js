let arr = [1, 2, 3, 4, 5];
let avg = arr.reduce(function(a, b) { return a + b; }, 0) / arr.length;

console.log(avg);