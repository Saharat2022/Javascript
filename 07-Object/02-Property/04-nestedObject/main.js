const product1 = {
    name: 'Water',
    distributor: {
      name: 'Giraffe Water Company',
      address: {
        street: 'Phetchaburi',
        subdistrict: 'Thanonphetchaburi',
        district: 'Ratchathewi',
        province: 'Bangkok'
      }
    }
  };

console.log(product1.distributor.address.province)

const product2 = {};
console.log(product2.distributor.address); //ERROR  => undefined.address จะไมไ่ด้เพราะundefinedไม่ใช่ object จึงดอทต่อไม่ได้
console.log(product2.distributor?.address); //ดูว่าดอทต่อได้ไหม (เป็นobjectไหม) 


console.log(product2.distributor?.address?.provice); //ด้านหน้าเป็นobjectไหม ถ้าใช่จึงจะดอทต่อไปได้