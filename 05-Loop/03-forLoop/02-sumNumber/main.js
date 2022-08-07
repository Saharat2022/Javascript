let result = "";
let even ="";
let odd ="";
let modThree = "";
let evenPower = "";
let modThreePower ="";
let sumPowertwo = 0;
let sumPowerthree =0;
let sum =0;
let sumeven =0;

for (let i =1; i < 101 ; i++ ){
    sum += i
    if (i % 2 === 0){
        result += `${i} `;
        sumeven += i
    }
}
alert(result);
alert(sum);
alert(sumeven);


for (let i =1; i < 101 ; i++ ){
    if (i % 2 === 0){
        even += `${i} `;
        sumPowertwo = sumPowertwo+ (i**2);
    }else{
        odd += `${i} `;
    }
}
alert("Even" + "\n" + even);
alert("Odd"+ "\n" + odd);


for (let i =1; i < 101 ; i++ ){
    if (i % 3 === 0){
        modThree += `${i} `;
        sumPowerthree = sumPowerthree + (i**2);

    }
}

alert (`total : ${sumPowertwo - sumPowerthree}`);


