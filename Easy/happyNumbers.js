/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {

  let memo = {};

  function getHappy(num) {
      if (num === 1) return true;

      if (memo[num] !== undefined) return false; else memo[num] = false;

      let s = String(num);
      let next = 0;

      for (let i = 0; i < s.length; i++) {
          next += Number(s[i]) ** 2;
      }

      return getHappy(next);

  }

  return getHappy(n, 0);
};

