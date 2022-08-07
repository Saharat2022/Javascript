function numberRestparameter(...number){
    return number.reduce( (acc,item)=> item *acc ,1)
}

numberRestparameter(6,4,5,8)

