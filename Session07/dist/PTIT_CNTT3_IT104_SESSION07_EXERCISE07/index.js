class BankAccount {
    constructor(accNo, money, accStatus) {
        this.accNo = accNo;
        this.money = money;
        this.transactions = [];
        this.accStatus = accStatus;
    }
    addMoney(amount) {
        if (amount > 0) {
            this.money += amount;
            this.transactions.push(`+${amount} VND. Số dư: ${this.money}`);
        }
        else {
            console.log("Số tiền nạp phải > 0");
        }
    }
    takeMoney(amount) {
        if (amount > 0 && amount <= this.money) {
            this.money -= amount;
            this.transactions.push(`-${amount} VND. Số dư: ${this.money}`);
        }
        else {
            console.log("Không thể rút số tiền này");
        }
    }
    viewTransactions() {
        console.log(`Lịch sử giao dịch TK ${this.accNo}:`);
        this.transactions.forEach((item) => console.log(item));
    }
}
class SavingBank extends BankAccount {
    constructor(accNo, money, accStatus, interestRate) {
        super(accNo, money, accStatus);
        this.interestRate = interestRate;
    }
    takeMoney(amount) {
        if (amount > 0 && this.money - amount >= 0) {
            this.money -= amount;
            this.transactions.push(`-${amount} VND. Số dư: ${this.money}`);
        }
        else {
            console.log("Không thể rút vượt số dư");
        }
    }
}
const myAcc = new SavingBank("SB001", 5000, "active", 0.05);
myAcc.addMoney(2000);
myAcc.takeMoney(3000);
myAcc.takeMoney(4000);
myAcc.takeMoney(100);
myAcc.viewTransactions();
