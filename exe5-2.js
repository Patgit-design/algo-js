const readlineSync = require("readline-sync");
let answer = { name: '', prod: '', cast: [] };
let members = '';
let x=0;

function askTvSerie() {
    answer.name = readlineSync.question("What is the name of your favorite TV serie? ");
    answer.prod = readlineSync.question("What is his production year ?");
    while (members != 'end') {
        members = readlineSync.question("Which are the names of the cast members ? Write end to stop !");
        answer.cast.push(members);
       
    }}
    answer.cast.pop(x-1);
   

    function randomizeCast()  {
        return answer.cast[Math.floor(Math.random()*answer.length)];
       
    }
    console.log(JSON.stringify(askTvSerie()));
   askTvSerie();
    randomizeCast();
    console.log(randomizeCast());
   


