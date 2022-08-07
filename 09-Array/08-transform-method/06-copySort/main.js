function copySorted(arr){
    const clone = arr.slice(0);
    
    return clone.sort() /// string จะsort ได้เลย
}

let arr = ['React', 'Vue', 'Angular'];
let sorted = copySorted(arr);