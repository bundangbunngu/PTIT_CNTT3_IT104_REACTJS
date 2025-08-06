var input = "hello world";
var result = "";
for (var _i = 0, input_1 = input; _i < input_1.length; _i++) {
    var char = input_1[_i];
    if (!result.includes(char)) {
        result += char;
    }
}
console.log(result);
