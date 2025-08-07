var strings = [
    "hello",
    "world",
    "apple",
    "banana",
    "orange",
    "pumpkin",
    "cucuber",
];
var word = "";
function uniqueChar(str) {
    for (var i = 0; i < str.length; i++) {
        for (var j = i + 1; j < str.length; j++) {
            if (str[i] == str[j]) {
                return true;
            }
        }
    }
    return false;
}
function findString(str) {
    var strArray = str.split(" ");
    console.log(strArray);
    for (var i = 0; i < strArray.length; i++) {
        // console.log(strArray[i]);
        if (uniqueChar(strArray[i])) {
        }
    }
    return str;
}
findString("hello world apple banana orange pumpkin cucumber");
