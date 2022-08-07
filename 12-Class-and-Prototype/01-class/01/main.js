class Calculator{

    

    constructor(number=0){
        //this = {..}
        this.number = number; //this.number =20
    }

    sum(numberSum){
        return numberSum + this.number;
    }

    substract(numberSub){
        return  this.number - numberSub ;
    }

    multiply(numberMul){
        return numberMul * this.number;
    }

    divide(numberDivide){
        return this.number/numberDivide;
    }

    show(){
        return alert( this.number);
    }

}

let calA = new Calculator (20);
calA.multiply(3);