function processInput(input) {
    if (typeof input === "string") {
        if (/^\d+$/.test(input)) {
            var num = Number(input);
            console.log(num * num);
        }
        else {
            var letters = input.match(/[a-zA-Z]/g);
            var count = letters ? letters.length : 0;
            console.log("".concat(count, " k\u00FD t\u1EF1 ch\u1EEF c\u00E1i"));
        }
    }
    else if (typeof input === "number") {
        if (isPrime(input)) {
            console.log("Là số nguyên tố");
        }
        else {
            console.log("Không phải số nguyên tố");
        }
    }
    else if (typeof input === "boolean") {
        if (input) {
            console.log("Giá trị là true - tiến hành xử lý");
        }
        else {
            console.log("Giá trị là false - dừng xử lý");
        }
    }
}
function isPrime(n) {
    if (n <= 1 || !Number.isInteger(n))
        return false;
    for (var i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0)
            return false;
    }
    return true;
}
