class Sale {
    name;

    constructor(name){
        this.name = name;
    }


    calcPrice(){
        return console.log("THIS IS PARENT")
    }


}

class Beverage extends Sale {
    amount;
    price;
    discount;

    constructor (name,amount,price,discount){
        super(name);  //ไปเอาthis.nameจากพ่อมาใช้
        this.amount = amount;
        this.price = price;
        this.discount =discount;

    }
  

    calcPrice(){
        return (this.price*this.amount) - ((this.price * this.amount)*(this.discount)/100);
    }
    


}

let beverage = new Beverage("Pepsi",3,19,10);
beverage.calcPrice()   //หาของตัวเองก่อน ถ้าไม่เจอค่อยไปหาพ่อ