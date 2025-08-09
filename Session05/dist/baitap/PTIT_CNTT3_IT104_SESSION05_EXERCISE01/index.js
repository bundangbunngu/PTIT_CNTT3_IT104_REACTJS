class Vehicle {
    constructor(name, year, company) {
        this.name = name;
        this.year = year;
        this.company = company;
    }
    displayInfo() {
        console.log(`Tên xe: ${this.name}`);
        console.log(`Năm sản xuất: ${this.year}`);
        console.log(`Hãng xe: ${this.company}`);
    }
}
const vehicle1 = new Vehicle("Toyota Camry", 2020, "Toyota");
const vehicle2 = new Vehicle("Ford Ranger", 2022, "Ford");
vehicle1.displayInfo();
vehicle2.displayInfo();
