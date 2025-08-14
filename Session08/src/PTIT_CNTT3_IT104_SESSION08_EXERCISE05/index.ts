function findFirstDivisibleByTwo<T extends number>(arr: T[]): T | undefined {
  return arr.find((item) => item % 2 === 0);
}

console.log(findFirstDivisibleByTwo([1, 3, 5, 8, 9]));
console.log(findFirstDivisibleByTwo([1, 3, 5, 7]));
