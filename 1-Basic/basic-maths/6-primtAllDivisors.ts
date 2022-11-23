// 6 Print all Divisors of a given Number

function printDivisors(x: number): string {
  let outputStr = '';
  for (let i = 1; i < Math.floor(Math.sqrt(x)) + 1; i++) {
    if (x % i === 0) {
      if (x / i === i) {
        outputStr += `${i} `;
        continue;
      }
      outputStr += `${i} ${x / i} `;
    }
  }

  return outputStr;
}

console.log(printDivisors(36)); // 1 36 2 18 3 12 4 9 6
console.log(printDivisors(57)); // 1 57 3 19
console.log(printDivisors(11)); // 1 11

// time: O(sqrt(x))
// space: O(1)
