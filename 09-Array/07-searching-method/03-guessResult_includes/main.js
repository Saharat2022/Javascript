//include = มีอยู่หรือป่าว
console.log([1, 2, 3].includes(2)); //T
console.log([1, 2, 3].includes(4)); //F
console.log([1, 2, 3].includes(3, 3)); //มี 3 โดยเริ่มที่ตำเเหน่งที่ 3 =>F
console.log([1, 2, 3].includes(3, -1)); //T 
console.log([1, 2, NaN].includes(NaN)); //T เพราะ มันเชคเเค่ว่า มี Nan ไหม
console.log(['1', '2', '3'].includes(3)); //F