var name = 'Joe';
function makeUser() {
  return {
    name: 'John',
    ref: this
  };
}
let user = makeUser();//ทุก this ใน makeUser()คือ window
console.log(user.ref.name); //'Joe'
// user.ref = {window}