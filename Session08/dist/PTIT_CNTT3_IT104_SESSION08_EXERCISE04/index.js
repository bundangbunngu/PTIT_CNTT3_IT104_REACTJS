function mergeObjects(obj1, obj2) {
    return Object.assign(Object.assign({}, obj1), obj2);
}
let person = { name: "An", age: 25 };
let job = { title: "Developer", salary: 2000 };
let combined = mergeObjects(person, job);
console.log(combined);
