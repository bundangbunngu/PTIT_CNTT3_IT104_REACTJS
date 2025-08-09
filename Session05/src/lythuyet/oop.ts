class Person {
  // nơi khai báo các thuộc tính
  fullName: string;
  age: number;
  constructor(fullName: string, age: number) {
    this.fullName = fullName;
    this.age = age;
  }
  // Nơi khai báo các phương thức của đối tượng
  // Hàm lấy thông tin
  getInfo(): string {
    return `${this.fullName} hiện tại ${this.age} tuổi`;
  }
  // Hàm cập nhật thông tin
  setName(new_name: string): void {
    this.fullName = new_name;
  }
  getAge(): string {
    return `tuoi hien tai: ${this.age}`;
  }
  setAge(new_age: number): void {
    this.age = new_age;
  }
}
let sv1 = new Person("hong van", 20); // sv1 được gọi là instance của lớp Person
console.log("sv1", sv1.fullName);
sv1.setAge(21);
