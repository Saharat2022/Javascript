//อย่าเอาตัวต้นเเบบไป เเปลงค่านะ ควร clone ก่อน
let menu = {
    width: 200,
    height: 300,
    title: 'My menu'
  };

let  multiplyNumeric = (obj, num) => {
    const result = {};

    for (let key in obj){ //obj จะส่งมาทีละ key เป็นสตริง
         if( typeof obj[key] === 'number'  ){
            result[key] = obj[key] * num;
         }else{
            result[key] = obj[key];
         }
    }
    return result;
    
};

let c = multiplyNumeric(menu,3)


