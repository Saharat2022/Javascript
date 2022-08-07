//type 1 =>การ return มันจะรีเทินรอบเดียวเท่านั้นใน 1 ฟังขัน 

function checkAge(Age) {
    if (Age>18) {
      return true;
    }
    return confirm("Did parents allow you?");
  }
  let c =checkAge(10);



// //type2
//  function checkAge(age){

//     let Age = age > 18 ?  true : confirm("Did parents allow you?");
//     return Age;
// }

// let c = checkAge(18);

//type 3

return age > 18 || confirm("Did parents allow you?");

