// 31. Next Permutation

/*
A permutation of an array of integers is an arrangement of its members into a sequence or linear order.

For example, for arr = [1,2,3], the following are all the permutations of arr: [1,2,3], [1,3,2], [2, 1, 3], [2, 3, 1], [3,1,2], [3,2,1].
The next permutation of an array of integers is the next lexicographically greater permutation of its integer. More formally, if all the permutations of the array are sorted in one container according to their lexicographical order, then the next permutation of that array is the permutation that follows it in the sorted container. If such arrangement is not possible, the array must be rearranged as the lowest possible order (i.e., sorted in ascending order).

For example, the next permutation of arr = [1,2,3] is [1,3,2].
Similarly, the next permutation of arr = [2,3,1] is [3,1,2].
While the next permutation of arr = [3,2,1] is [1,2,3] because [3,2,1] does not have a lexicographical larger rearrangement.
Given an array of integers nums, find the next permutation of nums.

The replacement must be in place and use only constant extra memory.
*/

// Explanation:

// Iterate from the second last index to first index and find i for which arr[i] < arr[i+1] and assign that i to indexOfCurrItemLessThanNextItem.

// Iterate again from last index to first index, and find the i for which arr[i] > arr[indexOfCurrItemLessThanNextItem], and assign that i to indexOfEndRange.

// Swap arr[indexOfCurrItemLessThanNextItem] and arr[indexOfEndRange]

// Reverse from ' indexOfCurrItemLessThanNextItem + 1 to indexOfEndRange ' portion of the array

// if no break point found, any way we will return reverse of that array
// [ 5,4,3,2,1 ] --> [1,2,3,4,5]

function reverseArrayFromTo(arr: number[], start: number, end: number) {
  while (start <= end) {
    [arr[start], arr[end]] = [arr[end], arr[start]];
    start++;
    end--;
  }
}

function nextPermutation(nums: number[]): number[] {
  let indexOfCurrItemLessThanNextItem = -1;
  let indexOfEndRange = -1;

  for (let i = nums.length - 2; i >= 0; i--) {
    if (nums[i] < nums[i + 1]) {
      indexOfCurrItemLessThanNextItem = i;
      break;
    }
  }

  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] > nums[indexOfCurrItemLessThanNextItem]) {
      indexOfEndRange = i;
      break;
    }
  }

  // Edge case : [5,4,3,2,1] i.e no change in indexOfCurrItemLessThanNextItem & indexOfEndRange
  // No break point found using step 1 where arr[i] < arr[i+1]

  //  Swapping if break point found
  if (indexOfCurrItemLessThanNextItem !== -1 && indexOfEndRange !== -1) {
    [nums[indexOfCurrItemLessThanNextItem], nums[indexOfEndRange]] = [
      nums[indexOfEndRange],
      nums[indexOfCurrItemLessThanNextItem],
    ];
  }

  reverseArrayFromTo(
    nums,
    indexOfCurrItemLessThanNextItem + 1,
    nums.length - 1
  );

  return nums;
}

//  Time: O(3n) // O(n) + O(n) + O(n)
// Space: O(1)

console.log(nextPermutation([1, 3, 5, 4, 2])); // [ 1, 4, 2, 3, 5 ]
console.log(nextPermutation([5, 4, 3, 2, 1])); // [ 1, 2, 3, 4, 5 ]
console.log(nextPermutation([1, 2, 3, 4, 5])); // [ 1, 2, 3, 5, 4 ]
console.log(nextPermutation([1, 1, 5])); // [ 1, 5, 1 ]
