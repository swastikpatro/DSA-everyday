// Longest Sub-Array with Sum K

// Given an array containing N integers and an integer K., Your task is to find the length of the longest Sub-Array with the sum of the elements equal to the given value K.

function lenOfLongSubarr(nums: number[], k: number): number {
  let sum = 0;
  const hash = {
    '0': -1,
  };
  let maxLengthOfSubarr = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    if (hash.hasOwnProperty(sum - k)) {
      const currLengthOfSubarr = i - hash[sum - k];
      maxLengthOfSubarr = Math.max(currLengthOfSubarr, maxLengthOfSubarr);
    }

    if (hash.hasOwnProperty(sum)) {
      continue;
    } else {
      hash[sum] = i;
    }
  }
  // console.log(hash);
  return maxLengthOfSubarr;
}

console.log(
  lenOfLongSubarr([3, 9, -2, 4, 1, -7, 2, 6, -5, 8, -3, -7, 6, 2, 1], 5)
); // 12
console.log(lenOfLongSubarr([1], 0)); // 0

// Time: O(n)
// Space: O(n)
