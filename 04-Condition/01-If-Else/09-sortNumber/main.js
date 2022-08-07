let num1 = prompt("First number :");
let num2; 
let num3 ;

function checkNumber(num){
    return num === "" || num.trim() === '' || num === null || isNaN(num)
}
function Sort(n1,n2,n3){
     if ( n1-n2 > 0 && n1-n3> 0){
        if( n2-n3 > 0 ) 
            return alert(`${n1} ${n2} ${n3}`)
        else{
            return alert(`${n1} ${n3} ${n2}`)
        }
     }
     else if ( n3-n1 > 0 && n3-n2 > 0){
        
        if( n2-n1 > 0 ) 
            return alert(`${n3} ${n2} ${n1}`)
        else{
            return alert(`${n3} ${n1} ${n2}`)
        }
     }
     else if ( n2-n3 >0 && n2-n1 > 0){
        
        if( n1-n3 > 0 ) 
            return alert(`${n2} ${n1} ${n3}`)
        else{
            return alert(`${n2} ${n3} ${n1}`)
        }
     }else{
        return alert(`${n1} ${n2} ${n3}`)
     }
     
}

if (!checkNumber(num1) ){
    num2 = prompt("Second number :");

    if( !checkNumber(num2)){
        num3 = prompt("Thrid number :");
        if(!checkNumber(num3)){
            
            Sort(num1,num2,num3);

        }else{
            alert("Please input number ")
        }
    }else{
        alert("Please input number ")
    }
}else{
    alert("Please input number ")
}