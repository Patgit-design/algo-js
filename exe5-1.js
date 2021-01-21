const readlineSync = require("readline-sync");
let answer = { name: '', prod: '', cast: [] };
let members = '';
let x=0;

function askTvSerie(favoriteTV) {
    answer.name = readlineSync.question("What is the name of your favorite TV serie? ");
    answer.prod = readlineSync.question("What is his production year ?");
    while (answer.cast != 'end') {
        members = readlineSync.question("Which are the names of the cast members ? Write end to stop !");
        answer.cast.push(members);
    }
    cast.pop(x-1);

    return answer;
    
}
console.log(JSON.stringify(askTvSerie()));
