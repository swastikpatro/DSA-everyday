function reverse(num: number): number {
  let reverse = 0;

  for (let i = num; i !== 0; i = Math.floor(i / 10)) {
    const popped = i % 10;
    reverse = reverse * 10 + popped;
  }

  return reverse;
}

function checkPalindrome(x: number): boolean {
  if (x < 0) {
    return false;
  }

  const reversedNumber: number = reverse(x);

  return reversedNumber === x ? true : false;
}

// Time: O(n): where n is the length of number
// Time: O(1)

console.log(checkPalindrome(121)); // true
console.log(checkPalindrome(500)); // false
console.log(checkPalindrome(12321)); // true
