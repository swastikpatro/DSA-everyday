// link: https://leetcode.com/problems/check-if-array-is-sorted-and-rotated/

function check(nums: number[]): boolean {
  let decreasingPairCount = 0;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i - 1] > nums[i]) {
      decreasingPairCount++;
    }
  }

  if (nums[nums.length - 1] > nums[0]) {
    decreasingPairCount++;
  }

  return decreasingPairCount <= 1;
}

// if prev (i-1)th element is greater than current i.e ith element, increment count (as its a decreasing pair)
// as the array is in increasing, count increments if any decreasing order is found
// also check the first element as it is missed by the loop, if arr[0] is current then arr[last] is its previous, so also check **** arr[last] (i.e. previous element) > arr[0] (i.e. current) ****, thats a decreasing pair, either it should be increasing pair.
// even if the array is rotated, there will be only 1 such pair of decreasing e.g 3 4 5 1 2, the pair is (5,1)
