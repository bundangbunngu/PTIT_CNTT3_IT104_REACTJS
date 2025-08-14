function mergeObjects<T, U>(obj1: T, obj2: U): T & U {
  return { ...obj1, ...obj2 };
}

let person = { name: "An", age: 25 };
let job = { title: "Developer", salary: 2000 };

let combined = mergeObjects(person, job);
console.log(combined);

