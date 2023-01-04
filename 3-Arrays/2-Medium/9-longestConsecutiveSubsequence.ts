// 128. Longest Consecutive Sequence

// Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

// You must write an algorithm that runs in O(n) time.

// Ex.1
// Input: nums = [100,4,200,1,3,2]
// Output: 4
// Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.

// Ex.2
// [0, 3, 7, 2, 5, 8, 4, 6, 0, 1];
// Output: 9;

function longestConsecutive(nums: number[]): number {
  // Step 1: Iterate over the array and store each element as true in the hashSet
  // Step 2: Iterate over the array and check if the element is the starting element on the hashSet or not
  // i.e. hashSet doesnot contain element - 1.

  // Step 3: Keep a maxConsecutiveCount variable = 0.
  // Step 4: Iterate over the array, if element is starting do operation, else ignore.
  // Operation:
  // 1. Keep a Starting point which will be arr[i]
  // 2. keep a count variable = 1
  // 3. While arr[i] + count exists in hashmap increment count
  // 4. if count is greater than maxCount, updated maxCount.
  const hashSet = {};

  for (let i = 0; i < nums.length; i++) {
    hashSet[nums[i]] = true;
  }

  // console.log(hashSet);

  for (let i = 0; i < nums.length; i++) {
    if (hashSet.hasOwnProperty(nums[i] - 1)) {
      hashSet[nums[i]] = false;
    }
  }

  // No need of this maxStartingPoint.
  let maxStartingPoint = 0;
  let maxConsectiveCount = 0;
  for (let i = 0; i < nums.length; i++) {
    if (hashSet[nums[i]]) {
      let consectiveCount = 1;
      let startingPoint = Number(nums[i]);
      // this iteration is O(constant) and the constant cannot be equal to n
      while (hashSet.hasOwnProperty(startingPoint + consectiveCount)) {
        consectiveCount++;
      }
      maxConsectiveCount = Math.max(maxConsectiveCount, consectiveCount);
      maxStartingPoint = nums[i];
    }
  }

  return maxConsectiveCount;
}

// Time : O(n * 3)
// Space : O(n)

console.log(longestConsecutive([100, 101, 4, 200, 1, 3, 2])); // 4
console.log(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1])); // 9

// Approach 2: Naive Approach

//  Sort all, Iterate over and count the consective, if consective > maxCOnsective, update maxConsective.

function longestConsecutiveNaive(nums: number[]): number {
  nums = [...nums].sort((a, b) => a - b);

  if (nums.length === 1) {
    return 1;
  }
  let maxConsecutiveCount = 0;
  let consecutiveCount = 1;

  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i + 1] === nums[i] + 1) {
      consecutiveCount++;
    } else {
      consecutiveCount = 1;
    }

    maxConsecutiveCount = Math.max(maxConsecutiveCount, consecutiveCount);
  }
  return maxConsecutiveCount;
}

// Time : O(n * logn)
// Space : O(1)

console.log(longestConsecutiveNaive([100, 101, 4, 200, 1, 3, 2])); // 4
console.log(longestConsecutiveNaive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1])); // 9
console.log(longestConsecutiveNaive([0, 1, 2, 0])); // 3
console.log(longestConsecutiveNaive([0])); // 1
