let flattened = [
    [0, 1],
    [2, 3],
    [4, 5]
  ];

 function flat(array){

    let flattedArray = array.reduce( (acc,item,index) => {
      acc.push(...item)
      return acc //เอาไปใส่ที่ []
    },[])
    return flattedArray;


 } 

