const square = (n) => {
    n ** 2;
  };
  
console.log(square(7)); //undefine เพราะ ใส่ปีกกา ต้องเขียนreturnด้วย

const calcCircleArea = (r) => Math.PI * r ** 2;
console.log(calcCircleArea(3)); //3.14*9