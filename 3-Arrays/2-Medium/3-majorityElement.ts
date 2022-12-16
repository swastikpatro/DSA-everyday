// 169. Majority Element

// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

// Use of Moore's voting algorithm

function majorityElement(nums: number[]): number {
  let count = 0;
  let ele = 0;

  for (let i = 0; i < nums.length; i++) {
    if (count === 0) {
      ele = nums[i];
    }

    if (ele === nums[i]) {
      count++;
    } else {
      count--;
    }
  }

  return ele;
}

// Time: O(n)
// Space: O(1)

console.log(majorityElement([7, 7, 5, 5, 7, 7, 1]));
console.log(majorityElement([2, 2, 5, 2, 2, 7, 1]));
