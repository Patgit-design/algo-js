function sqr(a) {
    return a*a;
}
 
function Distance(x1, y1, x2, y2) {
    return Math.sqrt(sqr(y2 - y1) + sqr(x2 - x1)).toFixed (2);
}
 
console.log("Distance between pointA (1,1) and B(2,2): " +Distance(1, 1, 2, 2));
console.log("Distance between pointA (1,1) and B(3,1): " +Distance(1, 1, 3, 1));
console.log("Distance between pointA (4,1) and B(1,1): " +Distance(4, 1, 1, 1));
console.log("Distance between pointA (-2,2) and B(2,-2): " +Distance(4, 1, 1, 1));