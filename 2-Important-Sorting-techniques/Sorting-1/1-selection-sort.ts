function selectionSort(arr: number[], n: number): number[] {
  for (let i = 0; i < n - 1; i++) {
    let min: number = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[min] > arr[j]) {
        min = j;
      }
    }

    [arr[i], arr[min]] = [arr[min], arr[i]];
  }

  return arr;
}

console.log(selectionSort([13, 46, 24, 52, 20, 9], 6)); // [ 9, 13, 20, 24, 46, 52 ]
console.log(selectionSort([5, 4, 3, 2, 1], 5)); // [ 1, 2, 3, 4, 5 ]
console.log(selectionSort([4, 1, 3, 9, 7], 5)); // [ 1, 3, 4, 7, 9 ]

/**
 * Find the minimum element in the unsorted array and swap it with the element at the beginning.
 * The inner loop selects the minimum element in the unsorted array .
 */

//  Time: O(n^2)
//  Space: O(1)
