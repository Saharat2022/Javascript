function topSalaries(salaries=null){
    let {John,Pete,Mary,} = salaries;
    return Math.max(John,Pete,Mary);

}

let salaries = {
    John: 100,
    Pete: 300,
    Mary: 250
  };
console.log(topSalaries(salaries));