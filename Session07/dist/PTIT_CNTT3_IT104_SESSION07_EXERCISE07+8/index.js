class CoreAccount {
    constructor(accId, funds, accState) {
        this.accId = accId;
        this.funds = funds;
        this.logs = [];
        this.accState = accState;
    }
    putMoney(amount) {
        if (amount <= 0) {
            console.log("Số tiền nạp phải > 0");
            return;
        }
        this.funds += amount;
        this.logs.push(`+${amount} | Số dư: ${this.funds}`);
    }
    getMoney(amount) {
        if (amount <= 0) {
            console.log("Số tiền rút phải > 0");
            return;
        }
        if (amount > this.funds) {
            console.log("Không thể rút vượt số dư");
            return;
        }
        this.funds -= amount;
        this.logs.push(`-${amount} | Số dư: ${this.funds}`);
    }
    viewLogs() {
        console.log(`Lịch sử giao dịch TK ${this.accId}:`);
        if (this.logs.length === 0)
            console.log("(trống)");
        this.logs.forEach((item) => console.log(item));
    }
    getBalance() {
        return this.funds;
    }
}
class SavingWallet extends CoreAccount {
    constructor(accId, funds, accState, interestRate) {
        super(accId, funds, accState);
        this.interestRate = interestRate;
    }
    getMoney(amount) {
        if (amount <= 0) {
            console.log("Số tiền rút phải > 0");
            return;
        }
        if (this.funds - amount < 0) {
            console.log("SavingWallet: Không thể rút vượt số dư (không âm)");
            return;
        }
        this.funds -= amount;
        this.logs.push(`-${amount} | Số dư: ${this.funds}`);
    }
}
class CheckingWallet extends CoreAccount {
    constructor(accId, funds, accState, overdraftLimit) {
        super(accId, funds, accState);
        this.overdraftLimit = overdraftLimit;
    }
    getMoney(amount) {
        if (amount <= 0) {
            console.log("Số tiền rút phải > 0");
            return;
        }
        let after = this.funds - amount;
        if (after < -this.overdraftLimit) {
            console.log(`CheckingWallet: Vượt hạn mức thấu chi (${this.overdraftLimit})`);
            return;
        }
        this.funds = after;
        this.logs.push(`-${amount} | Số dư: ${this.funds}`);
    }
}
console.log("=== TEST SavingWallet ===");
let sav = new SavingWallet("SV-001", 5000, "active", 0.05);
sav.putMoney(2000);
sav.getMoney(6500);
sav.getMoney(600);
sav.viewLogs();
console.log("Số dư cuối:", sav.getBalance());
console.log("\n=== TEST CheckingWallet ===");
let chk = new CheckingWallet("CK-001", 2000, "active", 1000);
chk.putMoney(500);
chk.getMoney(2800);
chk.getMoney(900);
chk.viewLogs();
console.log("Số dư cuối:", chk.getBalance());
