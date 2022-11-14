function reverseNum(num: number): number {
  let isNegative: boolean = num < 0;
  if (isNegative) {
    num = -1 * num;
  }

  let reversedNum = 0;
  for (let i = num; i !== 0; i = Math.floor(i / 10)) {
    const popped = i % 10;
    reversedNum = reversedNum * 10 + popped;
  }

  // console.log
  return isNegative ? -1 * reversedNum : reversedNum;
}

console.log(reverseNum(12345)); // 54321
console.log(reverseNum(-12345)); // -54321
console.log(reverseNum(120)); // 21
console.log(reverseNum(1534236469)); // 9646324351

// Time: O(n) where n is the length of number
// space: O(1)
