// Khai báo biến
let strValue: string = "2"; // kiểu string
let numValue: number = 2; // kiểu number

// So sánh bằng ==
console.log(strValue == numValue); // true

// So sánh bằng ===
console.log(strValue === numValue); // false

/*
Giải thích:

1. ==:
   - So sánh giá trị sau khi ép kiểu.
   - "2" (string) được ép sang số 2 (number), nên "2" == 2 trả về true.

2. ===:
   - So sánh cả gtri và kiểu dữ liệu.
   - "2" là string, còn 2 là number kiểu khác nhau, nên "2" === 2 trả về false.
*/
