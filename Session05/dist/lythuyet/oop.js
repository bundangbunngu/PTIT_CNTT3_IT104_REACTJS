class Person {
    constructor(fullName, age) {
        this.fullName = fullName;
        this.age = age;
    }
    // Nơi khai báo các phương thức của đối tượng
    // Hàm lấy thông tin
    getInfo() {
        return `${this.fullName} hiện tại ${this.age} tuổi`;
    }
    // Hàm cập nhật thông tin
    setName(new_name) {
        this.fullName = new_name;
    }
    getAge() {
        return `tuoi hien tai: ${this.age}`;
    }
    setAge(new_age) {
        this.age = new_age;
    }
}
let sv1 = new Person("hong van", 20); // sv1 được gọi là instance của lớp Person
console.log("sv1", sv1.fullName);
sv1.setAge(21);
