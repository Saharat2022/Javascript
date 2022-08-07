
function change(word){
    let New = word.split("-")  //["background","color"]
    // console.log(New);
    let cha = New[1];
    let chang =  cha.charAt(0).toUpperCase() + cha.slice(1);
    New.pop();
    New.push(chang);
    let item = New.join("");

    return item;


}


change("background-color")