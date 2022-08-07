let prime = (target) => {

let result = "";

let count;

for ( let i = target; i <= target; i++){
    count = 0;
    count = count - count;
    // count =0;
    for ( let j = 2; j <= i ; j++){
        
        if ( i%j === 0 ){
            count += 1;
        }
    }
    
    //จำนวนเฉพาะ
    if ( count <= 1){
        result += `${i} `;
        console.log(`${i}เป็นจำนวนเฉพาะ`);
    }else{
        console.log(`${i}ไม่เป็นจำนวนเฉพาะ`);
    }
    
}


}

prime(46);