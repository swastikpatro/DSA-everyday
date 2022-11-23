function printSomethingXTimes(something: any, x: number): string {
  let output: string = '';
  const initial: number = 1;

  function recursive(count: number, n: number): void {
    output += something + ' ';

    if (count === n) return;

    recursive(count + 1, n);
  }

  recursive(initial, x);

  return output;
}

console.log(printSomethingXTimes('1', 15));
// 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
console.log(printSomethingXTimes('GFG', 5));
// GFG GFG GFG GFG GFG

// Time: O(n)
// Space: O(n)
