// 560. Subarray Sum Equals K

// Given an array of integers nums and an integer k, return the total number of subarrays whose sum equals to k.

// A subarray is a contiguous non-empty sequence of elements within an array.

function subarraySum(nums: number[], k: number): number {
  let sum = 0;
  const hash = {
    '0': 1,
  };
  let subarrayCount = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    if (hash.hasOwnProperty(sum - k)) {
      subarrayCount += hash[sum - k];
    }

    if (hash.hasOwnProperty(sum)) {
      hash[sum]++;
    } else {
      hash[sum] = 1;
    }
  }
  // console.log(hash);
  return subarrayCount;
}

console.log(subarraySum([3, 9, -2, 4, 1, -7, 2, 6, -5, 8, -3, -7, 6, 2, 1], 5)); // 7
console.log(subarraySum([1], 0)); // 0

// Time: O(n)
// Space: O(n)
