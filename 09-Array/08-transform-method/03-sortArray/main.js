//.sort(callback)
// a> b : 6  ค่า + ให้สลับเลข a,b
// a> b : -6 ไม่ต้องสลับเลข a,b

//spilt = ได้Arrayใหม่
//sort จะวนจนหมดarray
const arr = [11, 17, 23, 13, 7, 19];
//MAX->MIN


function compare(a,b){
    if(a<b){
        return 1         //return เป็น +  = ให้ย้ายไปฝั่งขวา //Logicที่เขากำหนดมาเเล้ว
    }else{
        return -1          //ให้ยุเหมือนเดิม
    }

}
arr.sort(compare)