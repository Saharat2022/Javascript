
function makeRandom(min,max){
    let diff  = Math.random() * (max-min)   // [0,0.999] * ผลต่าง เช่น 0.2% ของ7 ไม่มีทางถึง 7 เเน่นอนเพราะ 100%[ไม่ได้ สูงสุดเเค่0.99999]ของ 7 เเน่นอน
    return  (min+diff).toFixed(2)
}