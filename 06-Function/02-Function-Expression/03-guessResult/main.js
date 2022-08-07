function magic() {
    return function (x) {
      return x * 42;
    };
  }
  const answer = magic();
  console.log(answer); //เป็นฟังชัน 
  console.log(answer(1337)); //1337*42
  console.log(magic(1337)(42)); //42*42