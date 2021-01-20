//let oldArr = [3, 1, 5, 2, 9];
//let newArr = [];
//for (let i=0; i < oldArr.length; i++) {
//    newArr.push(oldArr[i]);}

  //  console.log(oldArr + "," + newArr);

   // let oldArr = [3, 1, 5, 2, 9]; /*spread */
   // let newArr = [...oldArr];

   // console.log(oldArr + "," + newArr);

let oldArr = [3, 1, 5, 2, 9];
let newArr = oldArr.slice();     //slice pour une partie de array dans ce cas vide = tout

console.log(oldArr + "," + newArr);
