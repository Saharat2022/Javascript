function filterOutOdds (...number){
    return number.filter( (item)=> item%2 == 0 );
}
filterOutOdds(2,3,4,5);