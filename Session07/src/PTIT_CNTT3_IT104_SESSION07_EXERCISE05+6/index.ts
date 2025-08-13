class Account {
  public id: number;
  public userName: string;
  private password: string;
  public isLogin: boolean;
  public role: string;

  constructor(id: number, userName: string, password: string, role: string) {
    this.id = id;
    this.userName = userName;
    this.password = password;
    this.role = role;
    this.isLogin = false;
  }

  login(password: string): void {
    if (password === this.password) {
      this.isLogin = true;
      console.log(`${this.userName} đăng nhập thành công!`);
    } else {
      console.log("Sai mật khẩu!");
    }
  }

  logout(): void {
    if (this.isLogin) {
      this.isLogin = false;
      console.log(`${this.userName} đã đăng xuất.`);
    }
  }
}

class userAcc extends Account {
  public status: string;

  constructor(
    id: number,
    userName: string,
    password: string,
    role: string,
    status: string
  ) {
    super(id, userName, password, role);
    this.status = status;
  }

  login(password: string): void {
    if (this.status === "banned") {
      console.log(`Tài khoản ${this.userName} đã bị khóa!`);
      return;
    }
    super.login(password);
  }
}

class adminAcc extends Account {
  banUser(user: userAcc): void {
    user.status = "banned";
    console.log(`Admin đã khóa tài khoản ${user.userName}`);
  }
}

let user1 = new userAcc(1, "Hoang", "123456", "user", "active");
let user2 = new userAcc(2, "Nam", "654321", "user", "active");
let admin1 = new adminAcc(99, "Admin", "admin123", "admin");

console.log("---- Đăng nhập user1 ----");
user1.login("123456");

console.log("---- Admin khóa user1 ----");
admin1.banUser(user1);

console.log("---- Thử đăng nhập lại user1 ----");
user1.login("123456");

console.log("---- Đăng nhập user2 ----");
user2.login("654321");
