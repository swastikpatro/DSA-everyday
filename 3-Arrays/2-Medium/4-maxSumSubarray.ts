// 53. Maximum Subarray

// Given an integer array nums, find the subarray which has the largest sum and return its sum.

function maxSubArray(nums: number[]): number {
  let maxSum = nums[0];
  let sum = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > sum + nums[i]) {
      sum = nums[i];
    } else {
      sum += nums[i];
    }

    maxSum = Math.max(sum, maxSum);
  }

  return maxSum;
}

// Time: O(n)
// Space: O(1)

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // 6
console.log(maxSubArray([-1, -5])); // -1
console.log(maxSubArray([1, 2])); // 3
