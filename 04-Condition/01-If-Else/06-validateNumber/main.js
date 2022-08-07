function check(para){
    return !(para == null || para.trim() == "" || para == "" || isNaN(para))

}

let input1 = prompt("First Number :");
let input2 = prompt("Second Number :");




if ( check(input1) || check(input2)){
    sum = +input1 +  +input2;
    alert(sum);

}else{
    alert("Invalid Number")
}


