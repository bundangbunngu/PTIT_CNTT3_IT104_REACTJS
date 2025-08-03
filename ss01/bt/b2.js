const a = 5;              // Khai báo số nguyên
const arr = [1, 2, 3];     // Khai báo mảng

// Thử thay đổi giá trị của biến số nguyên
a = 10; // Lỗi

// Thêm phần tử vào mảng
arr.push(4); //  Không lỗi
console.log("Mảng sau khi thêm phần tử:", arr);
// Biến const không thể được gán lại
// nhưng nội dung bên trong mảng hoặc
// object khai báo bằng const vẫn có
// thể bị thay đổi.