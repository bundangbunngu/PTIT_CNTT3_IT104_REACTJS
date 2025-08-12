class Student {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    getId() {
        return this.id;
    }
    getName() {
        return this.name;
    }
    setName(newName) {
        this.name = newName;
    }
}
let allStudents = [];
class Classroom {
    constructor() {
        this.students = [];
    }
    showStudents() {
        console.log("Danh sách học sinh trong lớp:");
        this.students.forEach((s) => {
            console.log(`ID: ${s.getId()}, Tên: ${s.getName()}`);
        });
    }
    addStudent(student) {
        this.students.push(student);
    }
    filterStudent(id) {
        return this.students.filter((s) => s.getId() === id);
    }
    addStudentInClass(id) {
        let index = allStudents.findIndex((s) => s.getId() === id);
        if (index !== -1) {
            this.students.push(allStudents[index]);
            allStudents.splice(index, 1);
        }
    }
    removeStudent(id) {
        let index = this.students.findIndex((s) => s.getId() === id);
        if (index !== -1) {
            allStudents.push(this.students[index]);
            this.students.splice(index, 1);
        }
    }
    editStudent(id, newName) {
        let student = this.students.find((s) => s.getId() === id);
        if (student) {
            student.setName(newName);
        }
    }
}
let s1 = new Student(1, "An");
let s2 = new Student(2, "Bình");
let s3 = new Student(3, "Chi");
let s4 = new Student(4, "Dũng");
let s5 = new Student(5, "Hà");
let s6 = new Student(6, "Lan");
allStudents.push(s1, s2, s3, s4, s5, s6);
let class1 = new Classroom();
class1.addStudentInClass(1);
class1.addStudentInClass(2);
class1.addStudentInClass(3);
console.log("Trước khi thay đổi:");
class1.showStudents();
class1.removeStudent(2);
class1.editStudent(3, "Chi Mai");
console.log("\nSau khi thay đổi:");
class1.showStudents();
console.log("\nDanh sách học sinh ngoài lớp:");
console.log(allStudents.map((s) => `${s.getId()} - ${s.getName()}`));
