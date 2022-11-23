function printSumOfFirstXNaturalNumbers(x: number): number {
  let sum: number = 0;

  function recursive(y: number): void {
    if (y < 1) {
      return;
    }

    sum += y;
    return recursive(y - 1);
  }

  recursive(x);
  return sum;
}

// Time: O(n)
// Space: O(n)

console.log(printSumOfFirstXNaturalNumbers(10)); // 55
console.log(printSumOfFirstXNaturalNumbers(100)); // 5050
console.log(printSumOfFirstXNaturalNumbers(12)); // 78

const getSum2 = (n: number): number => (n * (n + 1)) / 2;

console.log(getSum2(10)); // 55
// Time: O(1)
// Space: O(1)
