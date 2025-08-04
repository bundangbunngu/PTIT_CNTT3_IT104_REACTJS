const createUser = (name, age = 18, role = "user") => {
  return {
    name: name,
    age: age,
    role: role
  };
};

console.log(createUser("Nguyen Van A", 20, "Admin"));
console.log(createUser("Tran Van B")); 
