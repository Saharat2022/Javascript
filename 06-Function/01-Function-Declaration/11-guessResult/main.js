// function sayHi(age) {
//     if (age < 12) alert("Hi kid");
//   }
//   console.log(sayHi);  //function sayhi
//   console.log(sayHi(10)); // "Hi kid"



  //if (t/f) =>มันจะเเปลงเป็นT F เองเสมอ
function sayHi(name) {
    if (name) {
      alert("Hi " + name);
      return;
    } else {
      return "Who are you";
    }
  }
  console.log(sayHi("John")); //Hi john
  console.log(sayHi()); // Who are you