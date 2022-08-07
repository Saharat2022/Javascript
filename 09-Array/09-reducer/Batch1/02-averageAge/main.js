
let john = { name: 'John', age: 27 };
let pete= { name: 'Jo', age: 21 };
let mary = { name: 'Jin', age: 25 };


function getAverageAge(arr){
    let clone = arr.slice(0);

    let sumAge =  clone.reduce( (sum,item) => sum + item.age ,0)
    
    let aver = sumAge/ clone.length ;
    return aver

}
let arr = [ john , pete, mary];
console.log(getAverageAge(arr))
