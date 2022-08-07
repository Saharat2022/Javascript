//คล้าย foreach เเค่ทำเสดจะ return รวมเก็บใน array ใหม่
const arrayInt = [1, 2, 30, 400];
const resultInt = arrayInt.map( function(item,index,array){
    return item*2
})

resultInt;

const arrayNum = [1, 2, 3, 4];
const resultNum = arrayNum.map( item => String(item));
resultNum;

const arraytype = [1, '1', 2, {}];
const resulttype = arraytype.map( item => typeof (item));
resulttype;

const arrayupper = ['apple', 'banana', 'orange'];
const resultupper = arrayupper.map( item => item.toUpperCase());
resultupper;

const arrayoddeven = [1, 3, 4, 5, 6, 7, 8];
const resultoddeven = arrayoddeven.map( item => {
    if(item%2 ===0){
        return "odd"
    }
    return "Even"
})
resultoddeven;

const arraypush = [1, -3, 2, 8, -4, 5];
const resultplus = arraypush.map ( item => Math.abs(item));
resultplus;

const arraydemical = [100, 200.25, 300.84, 400.3];
const resultDecimal = arraydemical.map( item => item.toFixed(2));
arraydemical;

const Months =[ "Jan","Feb","Mar","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
const arraymonth = [0, 5, 10, 7, 6, 5, 0];
const resultmonth = arraymonth.map( (item,index) => Months[item]);

const arraydotname = [
    { name: 'apple', age: 14 },
    { name: 'banana', age: 18 },
    { name: 'watermelon', age: 32 }
  ];
const resultarraydotname = arraydotname.map( item => item.name )
resultarraydotname;

const array = [
    { name: 'apple', age: 14 },
    { name: 'banana', age: 18 },
    { name: 'watermelon', age: 32 }
  ];
const resultarray = array.map( (item)=> item.age); //14 18 32



const arrayConcat = [
    { name: 'apple', surname: 'London' },
    { name: 'banana', surname: 'Bangkok' },
    { name: 'watermelon', surname: 'Singapore' }
  ];
let resultarrayConcat = arrayConcat.map( (item) => item.name + " " +item.surname);


const arrayfruitbirth = [
    { name: 'apple', birth: '2000-01-01' },
    { name: 'banana', birth: '1990-10-01' },
    { name: 'watermelon', birth: '1985-12-01' }
  ];
const Current_year = '2021';
const resultarrayfruitbirth = arrayfruitbirth.map( item => { 
    let age = Current_year -  item.birth.slice(0,4)
    console.log(item)
    return {...item,age:age}  //clone
})  

const arrayfi = [
    { name: 'apple', birth: '2000-01-01' },
    { name: 'banana', birth: '1990-10-10' },
    { name: 'watermelon', birth: '1985-12-30' }
  ];
const resultarrayfi = arrayfi.map ( item =>
  
`<tr><td>${item.name}</td><td>${item.birth.slice(item.birth.length - 2)} ${Months[item.birth.slice(5,6)]} ${item.birth.slice(0,4)}</td></tr>`)
;