
//1 second = 1000 milliseconds.


function f() {
    alert('Hello!');
}


//setTimeout(callback,a);  : คือSetimeout มันจะเรียก callbackใช้ของมันเองเรามองไม่เหน
Function.prototype.defer = function (a) {
     setTimeout(f,a);
   
}

f.defer(1000);