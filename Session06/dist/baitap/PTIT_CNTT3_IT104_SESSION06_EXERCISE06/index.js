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
}
let s1 = new Student(1, "An");
let s2 = new Student(2, "Bình");
let s3 = new Student(3, "Chi");
let s4 = new Student(4, "Dũng");
let s5 = new Student(5, "Hà");
let s6 = new Student(6, "Lan");
allStudents.push(s1, s2, s3, s4, s5, s6);
let class1 = new Classroom();
let class2 = new Classroom();
class1.addStudentInClass(1);
class1.addStudentInClass(2);
class1.addStudentInClass(3);
class2.addStudentInClass(4);
class2.addStudentInClass(5);
class2.addStudentInClass(6);
console.log("Lớp 1:");
class1.showStudents();
console.log("Lớp 2:");
class2.showStudents();
console.log("Danh sách học sinh còn lại ngoài lớp:", allStudents);
