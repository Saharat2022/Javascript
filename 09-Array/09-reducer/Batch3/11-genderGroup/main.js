const persons = [
    { name: 'John', sex: 'M' },
    { name: 'Jody', sex: 'M' },
    { name: 'Susan', sex: 'F' },
    { name: 'Kate', sex: 'F' },
    { name: 'Sid', sex: 'M' }
  ];


let result = persons.reduce( (acc,item) => {
 
  
    let tempM = acc.M; 
    let tempF = acc.F; 
    if ( item.sex === "M"){
        tempM.push(item["name"])  
        // acc.M = acc.M + space.push(nameItem)
        // acc[sexItem].push(item.name)  
    }else{
        tempF.push(item["name"])
    }

    acc.M = tempM;
    acc.F = tempF;

    return acc;
}
,{ M :[], F:[] });
