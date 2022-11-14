function giveGcdAndLcm1(x: number, y: number): number[] {
  let gcd: number = 0;

  const smallest: number = x < y ? x : y;
  for (let i = 1; i < smallest + 1; i++) {
    if (x % i === 0 && y % i === 0) {
      gcd = i;
    }
  }

  let lcm: number = (x * y) / gcd;
  return [lcm, gcd];
}

// time : O((min(x,y))
// space : O(1)

function giveGcdAndLcm2(x, y) {
  function recursiveGCD(a: number, b: number): number {
    if (b === 0) {
      return a;
    }

    return recursiveGCD(b, a % b);
  }

  let gcd: number = recursiveGCD(x, y);
  let lcm: number = (x * y) / gcd;

  return [lcm, gcd];
}
// time : O(log(min(x,y)))
// space : O(1)

console.log(giveGcdAndLcm1(25, 5)); // [ 25, 5 ]
console.log(giveGcdAndLcm1(5, 10)); // [ 10, 5 ]
console.log(giveGcdAndLcm1(15, 75)); // [ 75, 15 ]

console.log(giveGcdAndLcm2(25, 5)); // [ 25, 5 ]
console.log(giveGcdAndLcm2(5, 10)); // [ 10, 5 ]
console.log(giveGcdAndLcm2(15, 75)); // [ 75, 15 ]
