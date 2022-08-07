const tasks = [
    { id: 1, name: 'Fishing' },
    { id: 2, name: 'Shopping' },
    { id: 3, name: 'Swimming' }
  ];




function deleteTask(id){

    let result = [];
    let remain = result.concat(tasks);

    remain.forEach( (item,array) => { 
       if( item.id === id){
            
        remain.splice(id-1,1) //return Array ที่ถูก remove
          
       }
    
    } )

    return remain;
}

deleteTask(1)