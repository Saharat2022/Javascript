
//จะ undefined คือ ไม่มีการ return ค่า 

function max(pa1,pa2,pa3,pa4){
    pa1 = +pa1;
    pa2 = +pa2;
    pa3 = +pa3;
    pa4 = +pa4;
    
   if (pa1-pa2>0){
    if( pa1-pa3>0){
        if (pa1-pa4>0){
            alert(pa1)
        }else{
            alert(pa4)
        }
    }else{
        if(pa3-pa4>0){
            alert(pa3)
        }else{
            alert(pa4)
        }
    }
   }else{
    if(pa2-pa3>0){
        if(pa2-pa4>0){
           alert(pa2) 
        }else{
            alert(pa4)
        }
    }else{
        if(pa3-pa4>0){
            alert(pa3)
        }else{
            alert(pa4)
        }
    }
   }
   
   
 
}
max();