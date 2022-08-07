function checkAge( user ){
    let {firstName,lastName,age:Age} = user;

    if( Age <= 18){
        return `Not Permission`
    }else{
        return `${firstName} ${lastName}`
    }

};

console.log(checkAge({ firstName:"Tawan",lastName:"HHH", age:18}));