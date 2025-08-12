abstract class Job {
  protected type: string;
  constructor(type: string) {
    this.type = type;
  }
  printType(): void {
    console.log(`Loại công việc: ${this.type}`);
  }
  abstract calculateSalary(): number;
}

class ParttimeJob extends Job {
  private workingHour: number;
  constructor(workingHour: number) {
    super("Part-time");
    this.workingHour = workingHour;
  }
  calculateSalary(): number {
    return 30000 * this.workingHour;
  }
}

class FulltimeJob extends Job {
  constructor() {
    super("Full-time");
  }
  calculateSalary(): number {
    return 10000000;
  }
}

let partTime = new ParttimeJob(100);
let fullTime = new FulltimeJob();

partTime.printType();
console.log(`Lương: ${partTime.calculateSalary()} VND`);

fullTime.printType();
console.log(`Lương: ${fullTime.calculateSalary()} VND`);
