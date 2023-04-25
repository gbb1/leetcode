/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {

  let N = nums.length;
  let out = {};

  function generateSets(curr = [], index = -1) {

      if (curr.length > N) {
          return;
      }

      if (curr in out) {
          return;
      }
      out[curr] = curr.sort((a, b) => {
          return a-b;
      });

      for (let i = index + 1; i < N; i++) {
          generateSets(curr.concat(nums[i]), i)
      }

  }

  generateSets();
  return Object.values(out);
};