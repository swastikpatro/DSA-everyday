function reverseWholeArr(arr) {
  let start = 0;
  let end = arr.length - 1;
  while (start <= end) {
    [arr[start], arr[end]] = [arr[end], arr[start]];
    start++;
    end--;
  }
}

function leaders2(arr: number[]): number[] {
  // code here
  let leader = arr[arr.length - 1];
  const res: number[] = [leader];
  for (let i = arr.length - 2; i >= 0; i--) {
    if (arr[i] >= leader) {
      leader = arr[i];
      res.push(leader);
    }
  }

  reverseWholeArr(res);
  return res;
}

console.log(leaders2([16, 17, 5, 4, 3, 5, 2])); // [17, 5, 5, 2]
// Time: O(n)
// Space: O(n)

// Not accepted as it took more 1.92 seconds
function leaders(arr: number[]): number[] {
  // code here
  let leader = arr[arr.length - 1];

  for (let i = arr.length - 2; i >= 0; i--) {
    if (arr[i] >= leader) {
      leader = arr[i];
    } else {
      arr[i] = Infinity;
    }
  }

  let p1 = 0;
  let searchNonInfinityValIndex = 1;
  while (searchNonInfinityValIndex < arr.length) {
    if (arr[p1] === Infinity && arr[searchNonInfinityValIndex] === Infinity) {
      searchNonInfinityValIndex++;
    } else if (
      arr[p1] === Infinity &&
      arr[searchNonInfinityValIndex] !== Infinity
    ) {
      [arr[p1], arr[searchNonInfinityValIndex]] = [
        arr[searchNonInfinityValIndex],
        arr[p1],
      ];
      p1++;
      searchNonInfinityValIndex++;
    }
  }

  arr.length = p1;

  return arr;
}

console.log(leaders([16, 17, 5, 4, 3, 5, 2])); // [ 17, 5, 5, 2 ]
