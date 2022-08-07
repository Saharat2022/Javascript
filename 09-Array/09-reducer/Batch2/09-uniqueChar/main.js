
let alphabets = ['a', 'b', 'a', 'b', 'c', 'e', 'e', 'c', 'd', 'd', 'd', 'd'];

const result = alphabets.reduce( (acc,item) =>{

    if(!acc.includes(item)){
        acc.push(item)
    }

    return acc;  //return acc => acc ส่งมาเเทนที่ [] => จากนั้นส่่งต่อไปยัง acc หน้าฟังชัน
},[])