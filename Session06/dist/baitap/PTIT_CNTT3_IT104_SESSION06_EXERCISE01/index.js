class Shape {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
}
class Rectangle extends Shape {
    constructor(name, width, height) {
        super(name);
        this.width = width;
        this.height = height;
    }
    getSize() {
        console.log(`Chiều rộng: ${this.width}, Chiều cao: ${this.height}`);
    }
}
let rect = new Rectangle("Hình chữ nhật", 10, 5);
console.log(rect.getName());
rect.getSize();
