// if( ด้านในจะเเปลงเป็น T/F เอง)

if (-1 || 0) alert('first');  // working
if (-1 && 0) alert('second');  // not working
if (null || -1 && 1) alert('third'); // ( 1 ) => ( true )