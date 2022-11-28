// Both left and right approach

function reverse(arr: number[], start: number, end: number): void {
  while (start <= end) {
    [arr[start], arr[end]] = [arr[end], arr[start]];
    start++;
    end--;
  }
}

function rotateRight(nums: number[], k: number): number[] {
  if (k > nums.length) {
    k = k % nums.length;
  }
  if (nums.length <= 1) return nums;
  // reversed the right (last) k elements
  reverse(nums, nums.length - k, nums.length - 1);
  // reversed the remaining left (first) n-k elements
  reverse(nums, 0, nums.length - k - 1);
  // reversed the whole array
  reverse(nums, 0, nums.length - 1);
  return nums;
}

// Time: O(n)
// Space: O(1)

function rotateLeft(nums: number[], k: number): number[] {
  if (k > nums.length) {
    k = k % nums.length;
  }

  if (nums.length <= 1) return nums;
  // reversed the left (first) k elements
  reverse(nums, 0, k - 1);
  // reversed the remaining right n-k elements
  reverse(nums, k, nums.length - 1);
  // reversed the whole array
  reverse(nums, 0, nums.length - 1);
  return nums;
}

// Time: O(n)
// Space: O(1)

console.log(rotateRight([1, 2, 3, 4, 5, 6, 7], 3)); // [ 5, 6, 7, 1, 2, 3, 4 ]
console.log(rotateRight([-1], 2)); // [ -1 ]
console.log(rotateRight([1, 2], 3)); // [ 2, 1 ]

console.log(rotateLeft([1, 2, 3, 4, 5, 6, 7], 3)); // [ 4, 5, 6, 7, 1, 2, 3 ]
console.log(rotateLeft([-1], 2)); // [ -1 ]
console.log(rotateLeft([1, 2], 3)); // [ 2, 1 ]
