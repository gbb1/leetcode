/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {

  const N = nums.length;

  for (let i = 0; i < N; i++) {
      if (i !== nums[i] && nums[i] < N) {
          let temp = nums[i];
          nums[i] = nums[temp];
          nums[temp] = temp;
          i--;
      }
  }

  for (let i = 0; i < N; i++) {
      if (nums[i] !== i) {
          return i;
      }
  }
  return nums.length;

};