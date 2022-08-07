const tasks = [
    { id: 1, name: 'Fishing' },
    { id: 2, name: 'Shopping' },
    { id: 3, name: 'Swimming' }
  ];




function updateTask(id, newName){

    let result = [];
    // remain = tasks.slice(0)  //clone
    let remain = result.concat(tasks);

    remain.forEach( (item) => {    //เชคเงื่อนไขในarray จึงใช้ foreach
       if( item.id === id){

        item.name = newName

       }
    
    } )

    return remain;
}

updateTask(5, 'Travelling')