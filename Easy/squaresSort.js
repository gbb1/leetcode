/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {

  let neg = nums.map((n) => { if (n > 0) { return -n } else { return n } });

  let i = 0, j = nums.length - 1;

  let ans = [];
  while (i <= j) {
      if (neg[i] <= neg[j]) {
          ans.push(neg[i])
          i++;
      } else {
          ans.push(neg[j])
          j--;
      }
  }

  return ans.map((n) => n**2).reverse()

};