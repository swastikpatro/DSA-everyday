function merge(
  array: number[],
  left: number,
  mid: number,
  right: number
): void {
  const n1 = mid - left + 1;
  const n2 = right - mid;

  const leftArr: number[] = new Array(n1).fill(0);
  const rightArr: number[] = new Array(n2).fill(0);

  // Copying data to temp arrays
  for (let i = 0; i < n1; i++) {
    leftArr[i] = array[left + i];
  }
  for (let j = 0; j < n2; j++) {
    rightArr[j] = array[mid + 1 + j];
  }

  let i = 0,
    j = 0,
    k = left;

  while (i < n1 && j < n2) {
    if (leftArr[i] <= rightArr[j]) {
      array[k] = leftArr[i];
      i++;
    } else {
      array[k] = rightArr[j];
      j++;
    }

    k++;
  }

  // Copy the remaining elements of
  // leftArr[], if there are any

  while (i < n1) {
    array[k] = leftArr[i];
    i++;
    k++;
  }

  // Copy the remaining elements of
  // rightArr[], if there are any
  while (j < n2) {
    array[k] = rightArr[j];
    j++;
    k++;
  }
}

function mergeSort(arr: number[], l: number, r: number): number[] | void {
  if (l >= r) {
    return;
  }

  const m: number = Math.trunc((l + r) / 2);
  mergeSort(arr, l, m);
  mergeSort(arr, m + 1, r);

  merge(arr, l, m, r);
  return arr;
}

// console.log(mergeSort([4, 1, 3, 9, 7], 0, 4));
console.log(mergeSort([9, 4, 7, 6, 3, 1, 5], 0, 6)); // [ 1, 3, 4, 5, 6, 7, 9 ]
console.log(mergeSort([13, 46, 52, 20, 24, 9], 0, 5)); // [ 9, 13, 20, 24, 46, 52 ]

// Time: Θ(n * logn)
// Auxiliary Space: O(n)
