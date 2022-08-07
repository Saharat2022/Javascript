
//กรฯีไม่ใส่ค่าพรารามิเตร
let message = "Welcome to Thailand";  //เป็นของ global

function logMessage(message) {    // เปรียบว่ามัน ประกาศ let message อีกตัวนึงเป็น local variable
  message = "Hello everybody";
  console.log(message); //Hello everybody
}

logMessage(message);
console.log(message); //Welcome to thailand


//กรฯีใส่ค่าพรารามิเตร
let name = "John";

function sayHi(input) {  // let input = undefined เพราะไม่มีค่าเข้ามา
  console.log(name); // "John" มันไม่เจอname ใน scopeจึงวิ่งไปดูข้างนอก
  name = input;
}

sayHi();  //ถ้าเราไม่ใส่ตัวเเปรเข้าไป จะทำให้ในฟังชันวิ่งเเบบ global
console.log(name);//Undefined


//สรุปถ้าใน block scope ไม่เจอตัวเเปรlocalมันจึงจะไปดูที่ global ซึ่งจะทำให้globalเปลี่ยนเเปลงค่าไปด้วย