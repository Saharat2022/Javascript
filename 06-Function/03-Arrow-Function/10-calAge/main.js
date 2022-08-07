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





let calDayFromBirthyear =  (birthYear) => {
    let day =0;
    //2019 -> 2020 : 1year
    //1995 -> 2020 : 25 year
    for (let i = birthYear; i <= 2020 ; i++ ){
        if(checkLeap(i)){
            day+= 366;
        }else{
            day += 365;
        }
        
    }
    return day;
} 