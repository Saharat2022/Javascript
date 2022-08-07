//rest parameter :ค่าที่เหลือให้เก็บในนี้, ใส่ได้ตรงที่เป็นการรับค่าพรามิเตอร์ เเละควรใส่เป็นลำดับสุดท้าย 
//spread parameter ใส่ได้ทุกที่ ที่ไม่ใช่พารามิเตรอ์
//Destruring : Array => เขียนตำเเหน้งให้ตรง, object => ถ้าอยากได้value ต้องเขียน key+ตำเเหน่ง ให้ตรง

const person = {
    firstName : "John",
    lastName : "Doe",
    hobbies : ['Sport',"Shopping"],
    address : {
        province : "Bangkok",
        distince : "Patumwan"
    },
    friend : [
        {
            firstname:"Jim",
            lastname: "Carry",
            phoneNumber : ".115151"
        },
        {
            firstName: "Jack",
            lastName: "Ma",
            phoneNumber :"5555"
        }
    ]
};

console.log(`address: ${person.address.distince}` )   //person.address.distince => กว่าจะได้ยาวมาก จึงใช้ destururing

const distince = person.address.distince;
console.log(`address: ${distince}`) //ดีขึ้นเเต่ก็ยังยาวอยู่




//Destructure : สลับที่กันได้
// const firstName = person.firstName;
// const lastName = person.lastName;

// const { firstName : Fname, lastName, age = 20} = person; // firstName = "John" คือ หา key firstName นี้ใน person , ถ้ามันหาไม่เจอจะมีค่า undefined
//ถ้าหา key age ไม่เจอให้มีค่าเท่ากับ 20
//เปลี่ยชื่อตัวเเปร firstName => Fname ด้วย


//หา key ที่ชื่อ province ว่ามีค่า valueเท่ากับเท่าไร เเล้วเก็บไว้ใน province
const { address: {province} } = person;  //provinec = "Bangkok"



//DESTRU ARRAY
const numbers = [79,82,90,60];
const[firstNumber, secondnumber] = numbers; //firstNumber =79 , secondnumber =82
const [, , , forthnumber] =numbers; //forthnumber = 60
const [a,b, ...c] = numbers; // c=[90,60]  rest parameter

const [d = 0] = []; // d = 0

const { firstName,lastName, ...otherInfo } = person;  //rest parameter otherInfo = []
const { friend: [ { phoneNumber:firstPhonenumber }] } = person;

const getFullname = (user) => {
    // console.log(`${user.firstName} ${user.lastName}`);
    const { firstName, lastName } = user;
    console.log(`${user.firstName} ${user.lastName}`)
};

getFullname({firstName : "John", lastName: "Doe"});
