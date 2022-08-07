
const thesentinel = 'stop';
function createObjectFromuserinput(){
    const result = {};
    
    let key;
    let value;
    do{
        key = prompt("Enter key");
        value = prompt("Enter value")

        if ( key !== null && key.trim() !== '' && key !== '' && (key !== thesentinel && value !== thesentinel)){
            result[key] = value
        }

    }
    while ( key !== thesentinel && value !== thesentinel );

    return result;


}
createObjectFromuserinput();

