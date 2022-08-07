// จงหา index ใน tasks ที่มี id เท่ากับ 2 =>findindex :วนหา value เเรกที่เจอตามเงื่อนไข (ถ้าเจอเเล้วจะไม่ไปหาต่อ)เเละreturn index นั้นออกมา

const tasks = [
    { id: 1, name: 'Fishing' },
    { id: 2, name: 'Shopping' },
    { id: 3, name: 'Swimming' }
  ];

console.log( tasks.findIndex( item => item.id === 2));  // 2 ===2 คือindex 1

