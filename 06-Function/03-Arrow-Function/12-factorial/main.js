const cal = (fac) => {
    let result =1 ;

    for (let i =1; i <=fac ; i++){
        //5!= 5*4*3*2*1
        result *= i;
    }
    return result;
}
cal(5);