function cloneObject(obj){
    let New = {...obj}
    return New;



}


let obj = {
    name : "A",
    age : 24
}
cloneObject(obj)