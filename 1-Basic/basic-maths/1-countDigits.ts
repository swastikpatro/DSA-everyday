function countDigitsII(n: number): number {
  return `${n}`.length;
}
// Time: O(1)
// space: O(1)

function countDigitsI(n: number = 0): number {
  let digit = 0;
  for (let i = n; i !== 0; i = Math.floor(i / 10)) {
    digit++;
  }
  return digit;
}
// Time: O(n)
// space: O(1)

function countDigitsIII(n: number): number {
  if (n === 0) {
    return 1;
  }

  const count = Math.floor(Math.log10(n) + 1);
  return count;
}

// Time: O(1)
// space: O(1)

console.log(countDigitsII(12345)); // 5
console.log(countDigitsII(0)); // 1
console.log(countDigitsII(1000000000)); // 10

console.log(countDigitsI(0)); // 0
console.log(countDigitsI(5744)); // 4

console.log(countDigitsIII(123)); // 3
console.log(countDigitsIII(0)); // 1
