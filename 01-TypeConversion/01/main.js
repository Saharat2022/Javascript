let a = undefined;
let b = 2;
let c = a++; 
// let c = a  ค่อย a = a+1


//n++ นำค่าเดิมของ a ไปใช้งานก่อน  แล้วจึงเพิ่มค่า a อีกหนึ่ง
// value 1 = n
// n = n+1

//++n เพิ่มค่าอีกหนึ่งให้กับ  a ก่อน   แล้วจึงนำค่าใหม่ของ a ไปใช้งาน
// n=n+1
// value 1 = n
// 

// i(++n) = i(n++) +1


// String(undefined) ==> "undefined" ==> NaN
// Number(undefined) ==> NaN
let d;
let e;
let f;

d = String(a); // undefined +1  =Nan ไม่ได้ 
e = ""+b;
f = c;

console.log("d:",d)
console.log("e:",e)
console.log("f:",f)