// Find the number that appears once, and other numbers twice.
// Using XOR

function singleNumber(nums: number[]): number {
  let res = 0;
  for (let i = 0; i < nums.length; i++) {
    res = res ^ nums[i];
  }

  return res;
}

// Time : O(n)
// Space : O(1)

console.log(singleNumber([4, 1, 2, 1, 2])); // 4
console.log(singleNumber([2, 2, 1])); // 4
console.log(singleNumber([1])); // 1

// when i = 0:
// res = 0 ^ 100  //console.log(0 ^ 4); // 4 i.e 100
// when i = 1, arr[i] = 1
// res = 100 ^ 2 // console.log(100 ^ 1); // 101
// when i = 2, arr[i] = 2
// res = 101 ^ 2 // console.log(101 ^ 2); // 103
// when i = 3, arr[i] = 1
// res = 103 ^ 1 // console.log(103 ^ 1); // 102
// when i = 4, arr[i] = 2
// res = 102 ^ 2 // console.log(102 ^ 2); // 100

// Finally: res = 100 i.e. 4

// XOR
// console.log(0 ^ 0); // 0
// console.log(0 ^ 1); // 1
// console.log(1 ^ 1); // 0

// Number to Binary i.e. 4 --> 100
// console.log(Number(4).toString(2)); // 100
