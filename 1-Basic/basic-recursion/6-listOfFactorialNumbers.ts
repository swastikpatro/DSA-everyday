function giveListOfFactorialNumbers(x: number): string {
  let output = '';
  let product = 1;
  const initial = 1;
  function recursive(count: number, n: number): void {
    if (product === n) {
      return;
    }
    product *= count;
    output += product + ' ';
    recursive(count + 1, n);
  }

  recursive(initial, x);
  return output;
}

console.log(giveListOfFactorialNumbers(120)); // 1 2 6 24 120
console.log(giveListOfFactorialNumbers(720)); // 1 2 6 24 120 720

// Time: O(n)
// Space: O(n)
