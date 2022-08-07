function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}


//มันจะหา total ใน loop ก่อนค่อยมาหาข้างนอก
let total= 100000;

for (let i =1; i < 11 ; i++){
    total += (total*(2.5/100))  ;
}
console.log("Income 10 years :",numberWithCommas(total.toFixed(2)));