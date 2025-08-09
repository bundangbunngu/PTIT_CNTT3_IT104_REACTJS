class Employee {
  public name: string;
  protected company: string;
  private phone: string;

  constructor(name: string, company: string, phone: string) {
    this.name = name;
    this.company = company;
    this.phone = phone;
  }

  printInfo() {
    console.log(`Name: ${this.name}`);
    console.log(`Company: ${this.company}`);
    console.log(`Phone: ${this.phone}`);
  }
}

let emp = new Employee("Nguyễn Văn A", "ABC Corp", "0123456789");

emp.printInfo();
