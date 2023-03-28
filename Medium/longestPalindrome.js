// brute force:

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  const isPalindrome = (string) => {
      return string === string.split('').reverse().join('');
  }

  let x = 0;
  let y = s.length - 1;

  if (s.length === 1) {
      return s;
  }

  let max = 0;
  let out = s[0];

  for (let i = 0; i < s.length; i++) {

      x = i;
      while (s[y] !== s[i]) {
          y--;
      }

      if (y === i) {
          y = s.length - 1;
          continue;
      }

      let test = s.substring(x, y + 1);
      if (isPalindrome(test)) {
          if (test.length > max) {
              max = test.length;
              out = test;
          }
          y = s.length - 1;
          continue;
      } else {
          y--;
          i--;
      }
  }

  return out;

};