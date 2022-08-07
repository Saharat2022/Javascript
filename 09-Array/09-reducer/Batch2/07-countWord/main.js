

let names = ['Jack', 'John', 'Bill', 'John', 'Rick', 'Bill', 'John'];

let result = names.reduce( (acc,item,index) => {

    
    //ถ้าไม่เคยยมี keyมาก่อน
    if ( !acc[item]){
        acc[item] = 1;
    }else{
        acc[item] += 1; 
    }
    
    return acc   //return acc เเสดงว่าจะมาเเทน {} เเล้วเอา acc ไปเป็น accumulator รอบถัดไป




},{})