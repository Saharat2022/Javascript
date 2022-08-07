
const array = [29, 17, 13, 47, 23, 31];

let sum = 0;
array.forEach((item,index,array) => {
    sum += item
})

console.log(sum);

let sum1=0;
for (let i of array){
    sum1 = sum1+i;
}
console.log(sum1);

let sum2=0;
for(let i in array){
    sum2 += array[i] 
}
console.log(sum2);