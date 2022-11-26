function bubbleSort(arr: number[], n: number = arr.length): number[] {
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }

  return arr;
}

console.log(bubbleSort([13, 46, 24, 52, 20, 9], 6)); // [ 9, 13, 20, 24, 46, 52 ]
console.log(bubbleSort([5, 4, 3, 2, 1], 5)); // [ 1, 2, 3, 4, 5 ]

// Time:O(n^2)
// Space:O(1)

/**
 * Repeatedly swap 2 adjacent elements if arr[j] > arr[j+1] .
 * Here, the maximum element of the unsorted array reaches the end of the unsorted array after each iteration.
 * Unlike selection sort, here, sorting is done from the back as shown in the dry run.
 * After (N-1) iterations , we get a sorted array.
 */
