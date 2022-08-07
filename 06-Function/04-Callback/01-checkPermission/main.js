function checkPermission(role,adminFun,unadminFun){
    if (role == "admin"){
        adminFun();
    }else{
        unadminFun();
    }

}

function adminFunct(){   //adminFun = adminFunct  = function .......{} ===> adminFun () = adminFunct ()
    alert ("ACCESS GRANTED")
}
function unadminFunct(){
    alert ("ACCESS DENIED")
}

checkPermission("afdmin",adminFunct,unadminFunct) //call back