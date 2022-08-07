

const user = {
    email: 'cc@gmail.com',
    isActive: true
  };


  user.isActive = false;
  console.log(user); //change from t -> f
  user = {};
  console.log(user); //error because const cannot duplicate
  
  