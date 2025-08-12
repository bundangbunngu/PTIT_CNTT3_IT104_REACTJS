class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    calculateArea() {
        return Math.PI * this.radius * this.radius;
    }
    calculatePerimeter() {
        return 2 * Math.PI * this.radius;
    }
}
class Rectangle2 {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    calculateArea() {
        return this.width * this.height;
    }
    calculatePerimeter() {
        return 2 * (this.width + this.height);
    }
}
let circle = new Circle(5);
let rectangle = new Rectangle2(10, 6);
console.log(`Hình tròn - Diện tích: ${circle.calculateArea()}, Chu vi: ${circle.calculatePerimeter()}`);
console.log(`Hình chữ nhật - Diện tích: ${rectangle.calculateArea()}, Chu vi: ${rectangle.calculatePerimeter()}`);
