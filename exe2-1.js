const readlineSync = require("readline-sync"); 
let age = readlineSync.question('Quel âge avez-vous ?'); 
if (age <= 18) {
    console.log('Vous n\'êtes pas un adulte');
    
} else {
    console.log('Vous êtes adulte');
    
}