function getIntersectionOf2Arr(arr1: number[], arr2: number[]): number[] {
  const arr3: number[] = [];
  let i = 0,
    j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      i++;
    } else if (arr2[j] < arr1[i]) {
      j++;
    } else if (arr1[i] === arr2[j]) {
      arr3.push(arr1[i]);
      i++;
      j++;
    }
  }

  return arr3;
}

//  Time: O(n) n being the min length of the 2 arrays.
// Space: O(1)

console.log(
  getIntersectionOf2Arr([1, 2, 3, 3, 4, 5, 6, 7], [3, 3, 4, 4, 5, 8])
); // [3,3,4,5]

function merge2SortedArr(arr1, arr2, n, m) {
  let i = 0;
  let j = 0;
  const arr3 = new Array(n + m).fill(0);

  let k = 0;

  while (i < n && j < m) {
    if (arr1[i] <= arr2[j]) {
      arr3[k] = arr1[i];
      i++;
      k++;
    } else {
      arr3[k] = arr2[j];
      j++;
      k++;
    }
  }

  while (i < arr1.length) {
    arr3[k] = arr1[i];
    i++;
    k++;
  }
  while (j < arr2.length) {
    arr3[k] = arr2[j];
    j++;
    k++;
  }

  return arr3;
}

// 3 pointers to remove duplicates from 2 sorted array
function removeDuplicates(arr: number[]): number[] {
  let i = 0;
  let j = 0;
  let curr = 1;
  while (j < arr.length) {
    if (arr[i] !== arr[j]) {
      arr[curr] = arr[j];
      i = j;
      j++;
      curr++;
    } else {
      j++;
    }
  }

  arr.length = curr;
  return arr;
}

function findUnion(arr1: number[], arr2: number[], n: number, m: number) {
  //your code here
  const mergedArr = merge2SortedArr(arr1, arr2, n, m);
  const noDuplicatesMergedArr = removeDuplicates(mergedArr);
  return noDuplicatesMergedArr;
}

console.log(findUnion([2, 2, 3, 4, 5], [1, 1, 2, 3, 4], 5, 5)); // [ 1, 2, 3, 4, 5 ]
console.log(findUnion([1, 1, 1, 1], [2, 2, 2, 2], 4, 4)); // [ 1, 2 ]
