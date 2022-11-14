// 7. check whether a number is prime or not

function checkPrime(x: number): boolean {
  let isPrime = true;
  if (x <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.floor(Math.sqrt(x)); i++) {
    if (x % i === 0) {
      isPrime = false;
      break;
    }
  }

  return isPrime;
}
console.log(checkPrime(36)); // false
console.log(checkPrime(5)); // true
console.log(checkPrime(11)); // true
console.log(checkPrime(-12)); // false
console.log(checkPrime(4)); // false

// Time: O(sqrt(x))
// Space: O(1)
