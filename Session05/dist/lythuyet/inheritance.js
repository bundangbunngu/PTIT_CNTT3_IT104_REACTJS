// tính kế thừa
class Animal {
    constructor(name_value, color) {
        this.name = name_value;
    }
    sound() {
        console.log(`tieng keu: ${this.name}`);
    }
}
class Dog extends Animal {
    constructor(name, color) {
        super(name, color);
        this.name = name;
        this.color = color;
    }
    sound() {
        console.log(`tieng sua: ${this.name}`);
    }
    getInfo() {
        return `ten: ${this.name}, mau long mau: ${this.color}`;
    }
}
let dog1 = new Dog("cho1", "mau trang");
console.log(dog1.sound());
console.log(dog1.getInfo());
