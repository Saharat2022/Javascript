// let i = 1;

// while(i <= 100){

//     if(i % 2 === 0){
//         console.log(i);
//     }
    
//     i++;
// }

let i = 1;
let result = "";

while (i < 101){
    if ( i % 2 === 0){
        result = result + ` ${i}`;
    }
    i++;
}
alert(result);