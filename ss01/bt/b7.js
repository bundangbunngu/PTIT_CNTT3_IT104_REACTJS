const sumArrays = (...arrays) => {
  return arrays.map(arr => arr.reduce((sum, num) => sum + num, 0));
};

// Ví dụ sử dụng:
console.log(sumArrays([1, 2], [6, 7, 8], [12, 8]));
