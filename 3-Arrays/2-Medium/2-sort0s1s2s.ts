// 75. Sort Colors

// Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.

// We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.

// You must solve this problem without using the library's sort function.

// Another Approach:

// function sortColors(nums: number[]): number[] {
//   let count0s = 0;
//   let count1s = 0;
//   let count2s = 0;

//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] === 0) {
//       count0s++;
//     } else if (nums[i] === 1) {
//       count1s++;
//     } else {
//       count2s++;
//     }
//   }

//   let index = 0;
//   let loopCount0 = 0;
//   while (loopCount0 < count0s) {
//     nums[index] = 0;
//     loopCount0++;
//     index++;
//   }
//   let loopCount1 = 0;
//   while (loopCount1 < count1s) {
//     nums[index] = 1;
//     loopCount1++;
//     index++;
//   }
//   let loopCount2 = 0;
//   while (loopCount2 < count2s) {
//     nums[index] = 2;
//     loopCount2++;
//     index++;
//   }

//   return nums;
// }

// Time: O(3n)
// Space: O(1)

// Dutch National Flag ALgorithm

// index 0 to low-1 will contain 0's
// index low to mid-1 will contain 1's
// index high+1 onwards will contain 2's

function sortColors(nums: number[]): number[] {
  let mid = 0;
  let low = 0;
  let high = nums.length - 1;
  while (mid <= high) {
    if (nums[mid] === 0) {
      [nums[low], nums[mid]] = [nums[mid], nums[low]];
      low++;
      mid++;
    } else if (nums[mid] === 2) {
      [nums[high], nums[mid]] = [nums[mid], nums[high]];
      high--;
    } else {
      nums[mid] === 2;
      mid++;
    }
  }

  return nums;
}

// Time : O(n)
// Space : O(1)

console.log(sortColors([2, 0, 2, 1, 1, 0])); // [ 0, 0, 1, 1, 2, 2 ]
console.log(sortColors([2, 0, 1])); // [ 0, 1, 2 ]
