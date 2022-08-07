let arr = [0,2,4,65,98,25,87,98];

function filterRange(arr, a, b){
    let temp =[];
    let result = temp.concat(arr);
    return result.filter( (item) => item >= a && item <= b )

    
}

filterRange(arr,50,60)

