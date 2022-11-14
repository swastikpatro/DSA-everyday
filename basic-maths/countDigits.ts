function countDigits2(n: number): number {
  return `${n}`.length;
}
// Time: O(1)
// space: O(1)

function countDigits(n: number = 0): number {
  let digit = 0;
  for (let i = n; i !== 0; i = Math.floor(i / 10)) {
    digit++;
  }
  return digit;
}
// Time: O(n)
// space: O(1)

function countDigits3(n: number): number {
  if (n === 0) {
    return 1;
  }

  const count = Math.floor(Math.log10(n) + 1);
  return count;
}

// Time: O(1)
// space: O(1)

console.log(countDigits2(12345)); // 5
console.log(countDigits2(0)); // 1
console.log(countDigits2(1000000000)); // 10

console.log(countDigits(0)); // 0
console.log(countDigits(5744)); // 4

console.log(countDigits3(123)); // 3
console.log(countDigits3(0)); // 1
