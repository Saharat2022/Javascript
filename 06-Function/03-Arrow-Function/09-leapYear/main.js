//leap year =หาร 4 ลงตัว , ผลคูณของ 100 เเละหารด้วย 400 ลงตัว

let checkLeap = year => {
    if ( year % 100 == 0){
        // if(year % 400 ==0){
        //     return true;
        // }else{
        //     return false;
        // }
        return year % 400 == 0;
    }

    return year % 4 == 0;
}