function calsummary(salearray){
    const sum = [];

    for (let item of salearray){
        let current = {}

        if(item.discount){
            let netPrice = item.price - (item.Price * item*discount)
            


        }else{
            netPrice = item.price;
        }


        current.netprice = netPrice;
        




        sum.push(current);
    }

    return sum;



}