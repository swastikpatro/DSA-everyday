function reverseArr(arr: number[]): number[] {
  function recursiveReverse(start: number, end: number, arr: number[]): void {
    if (start >= end) {
      return;
    }

    [arr[start], arr[end]] = [arr[end], arr[start]];
    recursiveReverse(start + 1, end - 1, arr);
  }

  recursiveReverse(0, arr.length - 1, arr);
  return arr;
}

console.log(reverseArr([1, 2, 3, 4, 5]));
// [5, 4, 3, 2, 1]
console.log(reverseArr([1, 2, 3, 4]));
// [4, 3, 2, 1]

// Time: O(n) 'n/2 iterations'
// Space: O(n)
