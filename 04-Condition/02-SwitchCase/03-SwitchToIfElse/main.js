let broswer = prompt("Your broswer : ") ;

if ( broswer === "Chrome" || broswer === "Firefox" || broswer === "Safari" || broswer === "Opera" ) {
    alert("Okay we support these browsers too");
}else if ( broswer === "Edge" ){
    alert("You've got the Edge!");
}else{
    alert("We hope that this page looks ok!");
}