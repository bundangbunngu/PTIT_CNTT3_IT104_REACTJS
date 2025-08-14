function partialUpdate<T>(obj: T, updates: Partial<T>): T {
  return { ...obj, ...updates };
}

let person5 = { name: "Alice", age: 30, job: "Developer" };

console.log(partialUpdate(person5, { age: 31 }));

console.log(partialUpdate(person5, { name: "Bob", job: "Designer" }));
