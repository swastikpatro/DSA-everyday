// 26. Remove Duplicates from Sorted Array

// Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same.

// Used 3 pointers for this to solve

function removeDuplicates(nums: number[]): void {
  let i = 0,
    j = 1,
    curr = 1;
  while (j < nums.length) {
    if (nums[i] !== nums[j]) {
      i = j;
      nums[curr] = nums[i];
      curr++;
    } else {
      j++;
    }
  }

  nums.length = curr;
}

console.log(removeDuplicates([1, 1, 2])); // [1,2]
console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
// [0,1,2,3,4]

// Time: O(n)
// Space: O(1)
