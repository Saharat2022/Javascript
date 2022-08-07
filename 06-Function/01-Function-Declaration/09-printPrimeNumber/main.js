// let result = "";
// let count;

// for ( let i = 2; i <= 100; i++){
//     count = 0;
//     count = count - count;
//     // count =0;
//     for ( let j = 2; j <= i ; j++){
        
//         if ( i%j === 0 ){
//             count += 1;
//         }
//     }
    
//     //จำนวนเฉพาะ
//     if ( count <= 1){
//         result += `${i} `;
//     }
    
// }



//trim ใช้ได้เเค่กับ สติง
//1
// function checkNumber(target){
//     let targets = `${target}`;
//     if (target === null || target === "" || targets.trim() === ""|| isNaN(target)){
//         alert("Please input number");
//     }else{
//         let result = "";

//         let count;

//         for ( let i = target; i <= target; i++){
//             count = 0;
//             count = count - count;
//             // count =0;
//             for ( let j = 2; j <= i ; j++){
                
//                 if ( i%j === 0 ){
//                     count += 1;
//                 }
//             }
            
//             //จำนวนเฉพาะ
//             if ( count <= 1){
                
//                 return `${i} is prime`;
//             }

//             return `${i} is not prime`
            
//         }
        
//     }
// }
// let c = checkNumber(21);


//2
function checkNumber(target){
    let targets = `${target}`;
    if (target === null || target === "" || targets.trim() === ""|| isNaN(target)){
        alert("Please input number");
    }else{
        let result = "";

        let count;

        for ( let i = 2; i <= target; i++){
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
                console.log(i)
            }
            
        }
        
       
    }
}
checkNumber(100);
