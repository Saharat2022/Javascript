const alphabets = ['a', 'b', 'a', 'c', 'a', 'd'];
// console.log(alphabets.indexOf('a'));//0


let result = [];
let foundIndex = alphabets.indexOf('a') ;

do{


   
    if ( foundIndex !== -1){
        result.push(foundIndex)
        foundIndex = alphabets.indexOf("a",foundIndex+1);
    }





}while (foundIndex !== -1)

console.log(result);