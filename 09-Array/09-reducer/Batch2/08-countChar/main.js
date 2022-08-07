let str = 'I live in Thailand';
let lower = str.toLowerCase();
const arrChar = lower.split("");

arrChar.reduce( (acc,item)=> {

    if (item.trim() != " "){
        acc[item] = acc[item] ? acc[item]+1 : 1;
    }

    return acc

},{})

