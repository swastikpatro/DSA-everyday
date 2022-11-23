function isPalindrome(word: string): boolean {
  let isWordPalindrome = true;
  // removes all ';' , ' ', ',' , ':' , '.'
  word = word.replace(/[^0-9a-z]/gi, '').toLowerCase();

  function recursive(start: number, end: number, wordStr: string): void {
    if (start > end) {
      return;
    }

    if (wordStr[start] !== wordStr[end]) {
      isWordPalindrome = false;
      return;
    }

    recursive(start + 1, end - 1, wordStr);
  }

  recursive(0, word.length - 1, word);
  return isWordPalindrome;
}

console.log(isPalindrome('A man, a plan, a canal: Panama')); // true
console.log(isPalindrome('race a car')); // false

// Time: O(n) 'n/2 iterations'
// Space: O(n)
