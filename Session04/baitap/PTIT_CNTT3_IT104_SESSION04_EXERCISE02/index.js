var scores = [8.5, 7.2, 9.0, 6.8, 7.5, 8.0, 6.9, 9.2, 7.8, 8.3];
var sum = 0;
for (var i = 0; i < scores.length; i++) {
    sum += scores[i];
}
var average = sum / scores.length;
console.log(average);
