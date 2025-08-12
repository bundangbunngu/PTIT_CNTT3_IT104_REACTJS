class Animal {
    move() {
        // Method thường
        console.log("Động vật đang di chuyển...");
    }
}
class Dog extends Animal {
    makeSound() {
        console.log("Gâu gâu!");
    }
}
class Cat extends Animal {
    makeSound() {
        console.log("Meo meo!");
    }
}
let dog = new Dog();
dog.move();
dog.makeSound();
let cat = new Cat();
cat.move();
cat.makeSound();
