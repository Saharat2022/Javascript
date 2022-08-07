const products = [
    { id: 1, name: 'Crystal' },
    { id: 4, name: 'Namthip' },
    { id: 5, name: 'Nestle' }
  ];

  let a = products.reduce( (acc,item) => {

        let temp ={};
        for (let key in item){
            //{ id: 1, name: 'Crystal' }
            // console.log(key);
            if( key == "name"){
                temp[key] = item.name;
            }
        }
        // console.log(temp);
        acc[item.id] = temp;
        // console.log(acc)
        return acc;
  },{ })

  console.log(a);