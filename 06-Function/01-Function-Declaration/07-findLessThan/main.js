// function min(para1,para2){
//     if (para1 > para2){
//         return para2;
//     }else{
//         return para1;
//     }
// }


// 1ฟังชันถ้ามันเจอ return คือออกฟังชันเลย จะไม่ทำงานต่อ
function min(para1,para2){
    if (para1 > para2){
        return para2;
    }
    return para1;
    
}

alert(min(25,5));