let user = prompt("Your name:");
let pass;
// user == null ถ้าเอาไปไว้อันสุดท้าย ถ้า user เท่ากับค่า Null กลับมา (เขากดcancle) เราจะเอาuser = null ไป trim ไม่ได้

if ( (user == null || user == "" || user.trim()==""|| !isNaN(user)) ){
    user = "Guest";
    console.log("Guest");
    alert(`Welcome ${user}`);
}else{
    if ( user.trim() === "codecamp"){
        pass = prompt(`Your password ${user.trim()}`);
        if( pass == null || pass == "" || pass.trim()==""|| isNaN(pass)){
             alert("Please input nuber xxxxxx");
        }else if( pass != "123456"){
             alert("Wrong password");
        }else{
            user = "codecamp";
        }
    } else {
        user = "Guest";
    }
    alert(`Welcome ${user}`);
} 



