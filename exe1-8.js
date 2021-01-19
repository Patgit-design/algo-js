const readlineSync = require("readline-sync"); 
let firstName = readlineSync.question('Q 1 of 9 :What is your first name ?'); 
let gender = readlineSync.question('Q 2 of 9 :Are you male or female ?');
let color = readlineSync.question('Q 3 of 9 : What is your favorite color ?');
let animal = readlineSync.question('Q 4 of 9 : What is your favorite pet ?');
let city = readlineSync.question('Q 5 of 9 : What is your city ?');
let season = readlineSync.question('Q 6 of 9 : Your favorite season ?');
let fruit = readlineSync.question('Q 7 of 9 : The fruit you prefer ?');
let tv = readlineSync.question('Q 8 of 9 : Your favorite TV Show ?');
let friend = readlineSync.question('Q 9 of 9 : The firstname of your best friend ?');

console.log("Once upon a time the little " + firstName + " was in " + city + " There was nobody except a " 
+ color + " " + animal + ". It was a " + gender + " who was eating a(n) " + fruit + "." 
+ firstName + " says you are cute i will call you "
+ friend + ". The weather was " + season + "." + firstName + " and " + friend + " where in reality in " + tv);   