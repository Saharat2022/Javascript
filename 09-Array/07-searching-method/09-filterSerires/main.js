//filter จะหาทุกitem/index ที่ตรงตามเงื่อนไขมาใส่ไว้ในอีก array
//foreach คล้าย filter เเต่เเค่ มันไม่ได้สร้างarrayใหม่ให้จะเอาไปเก็บarr เดิม เเละ foreach ไม่ค่อยใช้ทำเงื่อนไข ส่วนใหญ่ใช้ทำอะไรที่เหมือนๆกันเช่น *2 ทุกตัว

const array = [9, 17, 23, 5];
let numberMorethanten = array.filter( item => item >10);

const array1 = [1, 2, 3, 4];
let oddnumber = array1.filter( item => item%2 !== 0);

const array2 = [1, '1', 2, {}];
let numbertype = array2.filter( item => typeof item === 'number');

const array3 = ['apple', 'banana', 'orange', 'pineapple', 'watermeon'];
let character = array3.filter( item => item.length > 6);

const array4 = [1, -3, 2, 8, -4, 5];
let push = array4.filter( item => item>0 );

const array5 = [1, 3, 4, 5, 6, 7, 8];
let divi = array5.filter( item => item%3 === 0 );

const array6 = ['Elephant', 'Ant', 'Cat', 'Eagle', 'Zebra'];
let startwith_e = array6.filter( item => item.startsWith("E") );

const array7 = ['APPLE', 'oRanGE', 'PEACH', 'PaPAYA'];
let upper = array7.filter( item => item === item.toUpperCase() );

const array8 = ['Krabi', 'Chonburi', 'Buriram', 'Saraburi','Phrae'];
let component = array8.filter( item => item.toLowerCase().indexOf('buri') != -1 );

const array9 = [
    { name: 'Ben', age: 14 },
    { name: 'Phil', age: 18 },
    { name: 'John', age: 32 },
    { name: 'Ann', age: 16 },
    { name: 'Paul', age: 24 }
  ];
  let age = array9.filter( item => item.age >= 18 );

  const array10 = [
    { id: 1, name: 'Pepsi' },
    { id: 2, name: 'Mirinda' },
    { id: 3, name: 'Coke' },
    { id: 4, name: 'Fanta' },
    { id: 5, name: 'Sprite' }
  ];
  let id = array10.filter( item => item.id != 4 );

  const array11 = [
    { name: 'John', birth: '2001-07-31' },
    { name: 'Jack', birth: '1990-06-24' },
    { name: 'Jim', birth: '1984-12-13' },
    { name: 'Jeff', birth: '1996-02-05' },
    { name: 'Joe', birth: '2002-06-13' }
  ];
  let birthday = array11.filter( item => item.birth.indexOf('-06-') !== -1 );  //มันจะอ่านว่า True เเล้วเอาvalue ที่จริงมาเเสดง