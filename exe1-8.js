const readlineSync = require("readline-sync");
let firstName = readlineSync.question('What is your first name ?'); 
let gender = readlineSync.question('Are you male or female ?')
let color = readlineSync.question('What is your favorite color ?');
let animal = readlineSync.question('What is your favorite pet ?')
let city = readlineSync.question('What is your city ?');
let season = readlineSync.question('Your favorite season ?');
let fruit = readlineSync.question('The fruit you prefer ?');
let tv = readlineSync.question('Your favorite TV Show ?');
let friend = readlineSync.question('The firstname of your best friend ?');

console.log("Once upon a time the little " + firstName + " was in " + city + " There was nobody except a " 
+ color + " " + animal + ". It was a " + gender + " who was eating a(n) " + fruit + "." 
+ firstName + " says you are cute i will call you "
+ friend + ". The weather was " + season + "." + firstName + " and " + friend + " where in reality in " + tv);   