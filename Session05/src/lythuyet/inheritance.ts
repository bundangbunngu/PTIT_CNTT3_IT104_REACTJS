// tính kế thừa
class Animal {
  public name: string;
  protected color: string;
  constructor(name_value: string, color: string) {
    this.name = name_value;
  }
  sound(): void {
    console.log(`tieng keu: ${this.name}`);
  }
}
class Dog extends Animal {
  name: string;
  color: string;
  constructor(name: string, color: string) {
    super(name, color);
    this.name = name;
    this.color = color;
  }
  sound(): void {
    console.log(`tieng sua: ${this.name}`);
  }
  getInfo(): string {
    return `ten: ${this.name}, mau long mau: ${this.color}`;
  }
}
let dog1 = new Dog("cho1", "mau trang");
console.log(dog1.sound());
console.log(dog1.getInfo());
