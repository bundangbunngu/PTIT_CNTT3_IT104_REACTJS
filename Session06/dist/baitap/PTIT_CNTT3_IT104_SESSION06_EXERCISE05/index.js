class Vehicle {
    constructor() {
        this.speed = 0;
    }
    speedUp(amount) {
        this.speed += amount;
        console.log(`Tăng tốc lên ${this.speed} km/h`);
    }
    slowDown(amount) {
        this.speed -= amount;
        if (this.speed < 0)
            this.speed = 0;
        console.log(`Giảm tốc xuống ${this.speed} km/h`);
    }
    stop() {
        this.speed = 0;
        console.log(`Phương tiện đã dừng, tốc độ hiện tại: ${this.speed} km/h`);
    }
}
let car = new Vehicle();
car.speedUp(50);
car.slowDown(20);
car.stop();
