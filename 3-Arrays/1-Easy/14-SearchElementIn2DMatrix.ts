// 74. Search a 2D Matrix I (Row Wise Sorted)
// next. go for 240. Search a 2D Matrix II

// Write an efficient algorithm that searches for a value target in an m x n integer matrix matrix. This matrix has the following properties:

// Integers in each row are sorted from left to right.
// The first integer of each row is greater than the last integer of the previous row.

function searchMatrixI(matrix: number[][], target: number): boolean {
  let i = 0;
  let j = matrix[0].length - 1;

  while (i < matrix.length && j >= 0) {
    if (target === matrix[i][j]) {
      return true;
      // return [i, j];
    } else if (target > matrix[i][j]) {
      i++;
    } else {
      j--;
    }
  }
  return false;
  // return -1;
}

// Time: O(n+m)
// Space: O(1)

console.log(
  searchMatrixI(
    [
      [1, 3, 5, 7],
      [10, 11, 16, 20],
      [23, 30, 34, 60],
    ],
    3
  )
); // true // [0,1]

console.log(
  searchMatrixI(
    [
      [1, 3, 5, 7],
      [10, 11, 16, 20],
      [23, 30, 34, 60],
    ],
    13
  )
); // false -1

console.log(
  searchMatrixI(
    [
      [1, 3, 5, 7],
      [10, 11, 16, 20],
      [23, 30, 34, 60],
    ],
    20
  )
); // true [1,3]
