function ucFirst(str){
    let newstring = str.trim();
    let firstchar = newstring[0];
    let leftstring = newstring.slice(1); //1 ถึงตัวสุดท้าย
    
    return firstchar.toUpperCase() +leftstring;

}