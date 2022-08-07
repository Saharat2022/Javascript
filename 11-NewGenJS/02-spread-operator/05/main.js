const  removeRandom = (arr) => {
    let newArray = [...arr];
    let num = Math.floor(Math.random()*(newArray.length ));  //ปัดลง ,ไม่เอาตตัวสุดท้าย
    console.log(num);
    newArray.splice(num,1);
    return newArray;
}

let arr = [1,2,3,4,5]
removeRandom(arr)