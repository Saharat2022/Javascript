const arr = [2, 3, 5, 7, 11];


// function squareArr(arr){
//     const resultarray = [];

//     arr.forEach( item => {
//         let square = item**2
//         resultarray.push(square)
//     }
//     )
//     return resultarray;
// }

// squareArr(arr);

function squareArr(arr){
    const temparray = [];

    arr.forEach( (item,index)=> {

        temparray[index]  = item**2;
        
    });


    return temparray
}

squareArr(arr);

//[4, 9, 25, 49, 121]
//meaningเดียวกัน
//{ 0: 4
// 1: 9
// 2: 25
// 3: 49
// 4: 121 }