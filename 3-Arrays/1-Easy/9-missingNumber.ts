// if array length is 7, elements inside array includes from 0 to 7.
// to get sum of elements from 0 to n is = (n * (n + 1)) / 2
// loop over the elements and calculate loop sum
// subtract loopSum from sum to calculate the missing number

function findMissingNumber(nums: number[]): number {
  const n = nums.length;

  const sum = (n * (n + 1)) / 2;
  let loopSum = 0;
  for (let i = 0; i < nums.length; i++) {
    loopSum += nums[i];
  }

  const missingNum = sum - loopSum;
  return missingNum;
}

console.log(findMissingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1])); // 8

// Time: O(n)
// Space: O(1)
