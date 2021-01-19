const readlineSync = require("readline-sync");
let number = readlineSync.question('Entrez un nombre compris entre 1 et 7 ?');

if (number == 1) {
    console.log("Lundi");
}

  else if (number == 2) {
      console.log("Mardi");
  } 
  else if (number == 3) {
      console.log("Mercredi");
  }
  else if (number == 4) {
      console.log("Jeudi");
  }
  else if (number == 5) {
      console.log("Vendredi");
  }
  else if (number == 6) {
      console.log("Samedi");
  }
  else if (number == 7) {
      console.log("Dimanche");
  }
  else {
    console.log("Pas compris entre 1 et 7")
    }