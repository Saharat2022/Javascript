let user = {
    name: 'John',
    years: 27
  };

let {name,years:age,isAdmin =  true} = user

let obj = {
    name,
    age,
    isAdmin
}
console.log(obj);