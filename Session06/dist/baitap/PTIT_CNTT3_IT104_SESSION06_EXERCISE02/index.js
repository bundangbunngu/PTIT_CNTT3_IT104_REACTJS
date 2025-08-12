class Job {
    constructor(type) {
        this.type = type;
    }
    printType() {
        console.log(`Loại công việc: ${this.type}`);
    }
}
class ParttimeJob extends Job {
    constructor(workingHour) {
        super("Part-time");
        this.workingHour = workingHour;
    }
    calculateSalary() {
        return 30000 * this.workingHour;
    }
}
class FulltimeJob extends Job {
    constructor() {
        super("Full-time");
    }
    calculateSalary() {
        return 10000000;
    }
}
let partTime = new ParttimeJob(100);
let fullTime = new FulltimeJob();
partTime.printType();
console.log(`Lương: ${partTime.calculateSalary()} VND`);
fullTime.printType();
console.log(`Lương: ${fullTime.calculateSalary()} VND`);
