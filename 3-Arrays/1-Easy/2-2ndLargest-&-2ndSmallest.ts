function find2ndLargest(arr: number[], n: number = arr.length): number {
  // if duplicates
  arr = [...new Set(arr)];
  n = arr.length;
  //
  if (n < 2) return -1;
  let max = -Infinity;
  let secondMax = -Infinity;
  for (let i = 0; i < n; i++) {
    if (arr[i] > max) {
      secondMax = max;
      max = arr[i];
    } else if (arr[i] > secondMax && arr[i] !== max) {
      secondMax = arr[i];
    }
  }

  return secondMax;
}

function find2ndSmallest(arr: number[], n: number = arr.length): number {
  // if duplicates
  arr = [...new Set(arr)];
  n = arr.length;
  //
  if (n < 2) return -1;
  let min = Infinity;
  let secondMin = Infinity;
  for (let i = 0; i < n; i++) {
    if (arr[i] < min) {
      secondMin = min;
      min = arr[i];
    } else if (arr[i] < secondMin && arr[i] > min) {
      secondMin = arr[i];
    }
  }

  return secondMin;
}

function find2ndLargestAnd2ndSmallest(
  arr: number[],
  n: number = arr.length
): number[] {
  const secondLargest = find2ndLargest(arr, arr.length);
  const secondSmallest = find2ndSmallest(arr, arr.length);
  return [secondLargest, secondSmallest];
}

console.log(
  find2ndLargestAnd2ndSmallest(
    [
      642, 642, 642, 642, 642, 642, 642, 642, 642, 642, 642, 642, 642, 642, 642,
      642, 642, 642, 642, 642, 642,
    ],
    21
  )
);
console.log(find2ndLargestAnd2ndSmallest([12, 10, 36, 34], 4));
console.log(find2ndLargestAnd2ndSmallest([10, 5, 10], 3));
