let input = +prompt("Your number :")
let sum = 0;
while(input){  //4596
    let result = input % 10;  //6
    sum += result    // 0+6
    input = (input - result)/10; // (4596 - 6)/10
}

alert(sum)

