function print1ToX(x: number): string {
  let output: string = '';
  const initial: number = 1;

  function recursive(count: number, n: number): void {
    output += `${count} `;
    if (count === n) {
      return;
    }

    recursive(count + 1, n);
  }

  recursive(initial, x);

  return output;
}

console.log(print1ToX(10));
// 1 2 3 4 5 6 7 8 9 10
console.log(print1ToX(20));
// 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20
console.log(print1ToX(5));
// 1 2 3 4 5

// Time: O(n)
// Space: O(n)
