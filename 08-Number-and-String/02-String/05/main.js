function truncate(str, length){
    if(str.length > length){
        let modify = str.slice(0,length-1) +"...";
        return modify;
    }else{
        return str
    }

}