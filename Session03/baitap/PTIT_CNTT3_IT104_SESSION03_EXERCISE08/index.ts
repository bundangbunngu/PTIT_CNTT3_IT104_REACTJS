function parseValue(value: number | string): number | null {
  const num = typeof value === "string" ? Number(value) : value;
  return isNaN(num) ? null : num;
}

function add(a: number | string, b: number | string): number | string {
  const num1 = parseValue(a);
  const num2 = parseValue(b);
  if (num1 === null || num2 === null) return "Dữ liệu không hợp lệ";
  return num1 + num2;
}

function subtract(a: number | string, b: number | string): number | string {
  const num1 = parseValue(a);
  const num2 = parseValue(b);
  if (num1 === null || num2 === null) return "Dữ liệu không hợp lệ";
  return num1 - num2;
}

function multiply(a: number | string, b: number | string): number | string {
  const num1 = parseValue(a);
  const num2 = parseValue(b);
  if (num1 === null || num2 === null) return "Dữ liệu không hợp lệ";
  return num1 * num2;
}

function divide(a: number | string, b: number | string): number | string {
  const num1 = parseValue(a);
  const num2 = parseValue(b);
  if (num1 === null || num2 === null || num2 === 0)
    return "Dữ liệu không hợp lệ hoặc chia cho 0";
  return num1 / num2;
}

console.log("Cộng:", add("10", "5")); // 15
console.log("Trừ:", subtract("20", 5)); // 15
console.log("Nhân:", multiply(3, "4")); // 12
console.log("Chia:", divide("100", "abc")); // Dữ liệu không hợp lệ
console.log("Chia:", divide("100", "0")); // Dữ liệu không hợp lệ hoặc chia cho 0
