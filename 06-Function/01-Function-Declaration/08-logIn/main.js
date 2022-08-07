function checkLogin(username,password){
    if ( username === "admin" && password === "P@ssw0rd"){
        alert("Success Login");
    }else{
        alert("Not Success Login");
    }

}

let username = prompt("username :");
let password = prompt("password :")

checkLogin(username,password);