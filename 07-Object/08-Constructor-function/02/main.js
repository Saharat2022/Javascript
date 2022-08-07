function Accumulator(startingValue){
        //this = {}
        this.currentValu = startingValue;
        this.read = function(input){
            let newInput = +prompt("Enter number")
            this.currentValu += newInput;
            
        }
        this.show = function(){
            alert(`${this.currentValu}`)
        }

        //return thisเองอัตโนมัติ

}

let a =new Accumulator(0);
console.log(a)  //จะออกมาเป็น object