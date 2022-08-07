let user = true;
let inputArray = [];
let sum=0;
let result;

while (user){
    user = +prompt("Your number :")

    if (user || user == 0){
        inputArray.push(user)
        
        
    }else{
        inputArray.forEach( item => sum+= item);
    }
    
}



