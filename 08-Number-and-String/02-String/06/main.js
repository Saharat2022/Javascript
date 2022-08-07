function extractCurrencyValue(string, rate){

    let number = +string.slice(1) * rate;
    return "THB"+number
}