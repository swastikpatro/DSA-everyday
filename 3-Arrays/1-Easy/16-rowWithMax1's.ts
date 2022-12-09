// Row with max 1's  GFG

// Given a boolean 2D array of n x m dimensions where each row is sorted. Find the 0-based index of the first row that has the maximum number of 1's.

function rowWithMax1s(matrix: number[][]): number {
  let i = 0;
  let j = matrix[0].length - 1;
  let maxRow = 0;

  while (i < matrix.length && j >= 0) {
    if (matrix[i][j] === 0) {
      i++;
    } else {
      j--;
      maxRow = i;
    }
  }

  if (i === matrix.length && j === matrix[0].length - 1) {
    return -1;
  }

  return maxRow;
}

// Time: O(n+m)
// Time: O(1)

console.log(
  rowWithMax1s([
    [0, 1, 1, 1],
    [0, 0, 1, 1],
    [1, 1, 1, 1],
    [0, 0, 0, 0],
  ])
);
// 2
// Explanation: Row 2 contains 4 1's (0-based indexing).

console.log(
  rowWithMax1s([
    [0, 0],
    [1, 1],
  ])
);
// 1
// Explanation: Row 1 contains 2 1's (0-based indexing).

console.log(
  rowWithMax1s([
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ])
);
// -1
// Explanation: No row contain 1's
