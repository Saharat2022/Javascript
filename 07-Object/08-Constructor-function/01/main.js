function Calculator(){

    this.num1 = 0;
    this.num2 = 0;
    this.read = function(){
        this.num1 = +prompt("Number1");
        this.num2 = +prompt("Number2");

    },
    this.sum = function(){
        return this.num1 + this.num2;
    }
    this.mul = function(){
        return this.num1 * this.num2;
    }

}

let a = new Calculator();
a.read();