/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {

  let N = nums.length;
  let out = [];

  function generateSets(curr = [], index = -1) {

      out.push(curr);

      for (let i = index + 1; i < N; i++) {
          generateSets(curr.concat(nums[i]), i)
      }

  }

  generateSets();
  return out;

};