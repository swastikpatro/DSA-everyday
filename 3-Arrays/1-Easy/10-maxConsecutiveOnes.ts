function findMaxConsecutiveOnes(nums: number[]): number {
  let i = 0,
    j = 0,
    consectiveCount = 0;
  let consectiveMaxCount = 0;
  while (j < nums.length) {
    if (nums[i] === 1 && nums[j] === 1) {
      consectiveCount += 1;
    } else if (nums[j] === 0 && nums[i] === 1) {
      console.log(i, j);
      consectiveCount = 0;
      i = j + 1;
      console.log(i);
    } else {
      // nums[i] = 0 and nums[j] = 0
      i++;
    }

    if (consectiveCount > consectiveMaxCount) {
      consectiveMaxCount = consectiveCount;
    }
    j++;
  }

  return consectiveMaxCount;
}

console.log(findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1])); // 3
console.log(findMaxConsecutiveOnes([1, 0, 1, 1, 0, 1])); // 2
