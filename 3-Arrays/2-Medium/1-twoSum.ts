// 1. Two Sum

// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

function twoSum(nums: number[], target: number): number[] | number {
  const hash = {};
  for (let i = 0; i < nums.length; i++) {
    if (hash.hasOwnProperty(target - nums[i])) {
      return [hash[target - nums[i]], i];
    } else {
      hash[nums[i]] = i;
    }
  }

  return -1;
}

// Time: O(n)
// Space: O(n)

console.log(twoSum([2, 7, 11, 15], 9)); // [ 0, 1 ]
console.log(twoSum([2, 7, 11, 15], 19)); // -1
