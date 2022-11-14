enum State {
  Yes = 'Yes',
  No = 'No',
}

function isArmstrong(x: number): State {
  function pow(n: number, p: number): number {
    return n ** p;
  }
  let sum: number = 0;
  const totalDigits: number = `${x}`.length;
  for (let i = x; i !== 0; i = Math.floor(i / 10)) {
    sum += pow(i % 10, totalDigits);
  }

  return sum === x ? State.Yes : State.No;
}

console.log(isArmstrong(153)); // Yes
console.log(isArmstrong(370)); // Yes
console.log(isArmstrong(210)); // No
console.log(isArmstrong(1634)); // Yes

// time: O(n) n is the length of number
// space: O(1)
