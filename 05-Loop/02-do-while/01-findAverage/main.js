// function isNum(input){
//     return !(input === null || input.trim() === '' || input == 0 || isNaN(input))
// }


// let input;
// let sum = 0;
// let count = 0;

// do {
//     input = prompt("Enter Number")
//     if(isNum(input)){
//         sum += +input;
//         count++;
//     }

// } while (isNum(input))

// if(count> 0) {
//     console.log(sum)
// console.log(sum/count)
// }

let userNumber ;
let sum = 0;
let count = 0;
function checkNumber(userNumber){
    return !(userNumber == null || userNumber == 0 || userNumber == "" || userNumber.trim() == "" || userNumber < 0 || isNaN(userNumber))
}
do{
    userNumber = prompt("Your number: ");
    if( checkNumber(userNumber)){
        sum += +userNumber;
        count++;
    }
    
}
while (checkNumber(userNumber))
 
if ( count > 0)
alert(sum/count);


