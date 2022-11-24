function insertionSort(arr: number[], n: number = arr.length): number[] {
  for (let i = 1; i < n; i++) {
    const current = arr[i];
    let indexPointer = i;
    for (let j = i - 1; j >= 0 && arr[j] > current; j--) {
      arr[j + 1] = arr[j];
      indexPointer--;
    }
    arr[indexPointer] = current;
  }
  return arr;
}

console.log(insertionSort([10, 5, 25, 11, 32, 22, 22, 35], 8)); // [ 5, 10, 11, 22, 22, 25, 32, 35 ]
console.log(insertionSort([13, 46, 52, 9, 24, 20], 6)); // [ 9, 13, 20, 24, 46, 52 ]
console.log(insertionSort([4, 1, 3, 9, 7], 5)); // [ 1, 3, 4, 7, 9 ]

// Time: O(n^2)
// Space: O(1)
