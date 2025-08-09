class Student {
    constructor(id, age, email) {
        this.id = id;
        this.age = age;
        this.email = email;
    }
    displayInfo() {
        console.log(`ID: ${this.id}`);
        console.log(`Tuổi: ${this.age}`);
        console.log(`Email: ${this.email}`);
    }
}
let studentList = [];
studentList.push(new Student(1, 20, "student1@example.com"));
studentList.push(new Student(2, 21, "student2@example.com"));
studentList.push(new Student(3, 22, "student3@example.com"));
for (let student of studentList) {
    student.displayInfo();
}
