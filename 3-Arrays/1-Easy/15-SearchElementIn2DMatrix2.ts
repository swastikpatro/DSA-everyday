// 240. Search a 2D Matrix II (Column wise sorted)

// Write an efficient algorithm that searches for a value target in an m x n integer matrix matrix. This matrix has the following properties:

// Integers in each row are sorted in ascending from left to right.
// Integers in each column are sorted in ascending from top to bottom.

function searchMatrixII(matrix: number[][], target: number): boolean {
  let i = matrix.length - 1;
  let j = 0;

  while (i >= 0 && j < matrix[0].length) {
    console.log(i, j);
    if (target === matrix[i][j]) {
      return true;
      // return [i,j];
    } else if (target < matrix[i][j]) {
      i--;
    } else {
      j++;
    }
  }

  return false;
}

// Time: O(n+m)
// Space: O(1)

console.log(
  searchMatrixII(
    [
      [1, 4, 7, 11, 15],
      [2, 5, 8, 12, 19],
      [3, 6, 9, 16, 22],
      [10, 13, 14, 17, 24],
      [18, 21, 23, 26, 30],
    ],
    5
  )
); //true //[1,1]

console.log(
  searchMatrixII(
    [
      [1, 4, 7, 11, 15],
      [2, 5, 8, 12, 19],
      [3, 6, 9, 16, 22],
      [10, 13, 14, 17, 24],
      [18, 21, 23, 26, 30],
    ],
    25
  )
); //false -1

console.log(
  searchMatrixII(
    [
      [1, 4, 7, 11, 15],
      [2, 5, 8, 12, 19],
      [3, 6, 9, 16, 22],
      [10, 13, 14, 17, 24],
      [18, 21, 23, 26, 30],
    ],
    30
  )
); //true // [4,4]
