function spead(array1){
    array1[3] = array1[3]**2
    return array1;
}

let a = [1,2,3,4,5];
console.log(spead([...a]));