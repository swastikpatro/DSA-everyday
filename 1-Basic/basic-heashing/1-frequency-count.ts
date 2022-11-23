// GFG Issue

function frequencyCount(arr: number[], N: number, P: number): string {
  const dataObj: object = {};
  let output: string = '';
  for (let i = 1; i < P + 1; i++) {
    dataObj[i] = 0;
  }

  for (let j = 0; j < N; j++) {
    dataObj[arr[j]]++;
  }

  for (let i = 1; i < N + 1; i++) {
    //P+1
    if (!!dataObj[i]) {
      output += dataObj[i] + ' ';
      continue;
    }
    if (i === N) {
      output += 0 + '';
      continue;
    }
    output += 0 + ' ';
  }

  return output;
}

console.log(frequencyCount([2, 3, 2, 3, 5], 5, 5)); // 0 2 2 0 1
console.log(frequencyCount([3, 2, 2, 2, 1], 5, 3)); // 1 3 1 0 0
console.log(frequencyCount([3, 3, 3, 3], 4, 3)); // 0 0 4 0

// Time: O(n)
// Space: O(n)
