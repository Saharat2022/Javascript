//max : function(){....}
Array.prototype.max = function(){
    return Math.max(...this);  //this =Array
}
Array.prototype.mix = function(){
    return Math.min(...this);  //this =Array
}