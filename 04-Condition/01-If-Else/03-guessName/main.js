let messsage = prompt("Guest my name :");
if ( messsage == null || messsage.trim() == "" || messsage == "" || !isNaN(messsage)){
    alert("Invalid message")
}else{
    if (messsage.trim() === "saharat"){
            alert("True Message");
    }else{
        alert("Wrong Message")
    }
}
