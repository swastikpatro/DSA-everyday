//  Using two pointers

function moveZeroesToEnd(nums: number[]): number[] {
  let i = 0,
    j = 0;

  while (j < nums.length) {
    if (nums[i] !== 0) {
      i++;
      j++;
    } else {
      if (nums[j] !== 0) {
        [nums[i], nums[j]] = [nums[j], nums[i]];
        i++;
        j++;
      } else {
        j++;
      }
    }
  }

  return nums;
}

console.log(moveZeroesToEnd([1, 0, 2, 3, 0, 4, 0, 1])); // [ 1, 2, 3, 4, 1, 0, 0, 0 ]

// Time: O(n)
// Space: O(1)
