abstract class Animal {
  abstract makeSound(): void; // Abstract method

  move(): void {
    // Method thường
    console.log("Động vật đang di chuyển...");
  }
}

class Dog extends Animal {
  makeSound(): void {
    console.log("Gâu gâu!");
  }
}

class Cat extends Animal {
  makeSound(): void {
    console.log("Meo meo!");
  }
}

let dog = new Dog();
dog.move();
dog.makeSound();

let cat = new Cat();
cat.move();
cat.makeSound();
