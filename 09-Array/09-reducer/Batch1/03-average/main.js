

const scores = [
    { score: 90, subject: 'HTML', weight: 0.2 },
    { score: 95, subject: 'CSS', weight: 0.3 },
    { score: 85, subject: 'JavaScript', weight: 0.5 }
  ];


  //item คือเเต่ละ index in array
let result = scores.reduce( (accu,item) => ((item.weight)*(item.score)) + accu,0 );
let num = scores.reduce( (accu,item) => item.weight + accu,0 );
let total = result / num ;

