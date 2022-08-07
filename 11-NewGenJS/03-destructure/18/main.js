const users = [
    { user: "Name1" },
    { user: "Name2", age: 2 },
    { user: "Name2" },
    { user: "Name3", age: 4 }
  ];


for (let item of users){
    const { user, age = "unknown"} = item;
    console.log(user + " " + age)
}