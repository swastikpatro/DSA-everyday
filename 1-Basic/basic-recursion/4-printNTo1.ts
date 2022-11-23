function printXTo1(x: number): string {
  let output: string = '';

  function recursive(n: number): void {
    if (n < 1) {
      return;
    }

    output += `${n} `;

    recursive(n - 1);
  }

  recursive(x);
  return output;
}

console.log(printXTo1(10));
// 10 9 8 7 6 5 4 3 2 1
console.log(printXTo1(5));
// 5 4 3 2 1
console.log(printXTo1(15));
// 15 14 13 12 11 10 9 8 7 6 5 4 3 2 1

// Time: O(n)
// Space: O(n)
