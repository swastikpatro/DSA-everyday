function findLargestEle(arr: number[], n: number = arr.length): number {
  let max = -Infinity;

  for (let i = 0; i < n; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }

  return max;
}

console.log(findLargestEle([2, 5, 1, 3, 0])); // 5
console.log(findLargestEle([1, 8, 7, 56, 90])); // 90

// Time: O(n)
// Space: O(1)
