/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
  const ref = 'abcdefghijklmnopqrstuvwxyz'
  const key = {};
  ref.split('').forEach((char, index) => {
      key[index + 1 + ''] = char;
  })

  let dp = {};
  dp[s.length] = 1;

  let curr = '';
  for (let i = s.length - 1; i > -1; i--) {
      if (s[i] === '0') {
          dp[i] = 0;
      } else {
          dp[i] = dp[i + 1];
      }

      if (key[s[i] + s[i+1]]) {
          dp[i] += dp[i+2];
      }
  }

  return dp[0];

};