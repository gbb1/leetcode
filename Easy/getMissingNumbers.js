/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {

  let N = nums.length;

  for (let i = 0; i < nums.length; i++) {
      if (i !== nums[i] - 1 && nums[i] <= N) {
          let temp = nums[i];
          nums[i] = nums[temp - 1];
          nums[temp - 1] = temp;
          if (temp !== nums[i]) {
              i--;
          }
      }
  }

  let out = [];
  nums.forEach((n, i) => {
      if (n !== i + 1) {
          out.push(i + 1);
      }
  })

  return out;

};