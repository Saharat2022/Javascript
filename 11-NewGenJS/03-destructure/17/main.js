const names = [
    { firstName: 'John', lastName: 'Doe' },
    { firstName: 'Jack', lastName: 'Dann' },
    { firstName: 'Joe', lastName: 'Dunne' }
  ];


for (let item of names) {
    let { firstName,lastName} = item ;
    console.log(`Full name: ${firstName + " "+ lastName}`);
}