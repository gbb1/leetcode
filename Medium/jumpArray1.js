/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
  const end = nums.length - 1;

  let x = end - 1;
  let y = end;
  if (y === 0) return true;

  while (x >= 0) {
      if (x + nums[x] >= y) {
          y = x;
      }

      if (y === 0) {
          break;
      }

      x--;
  }

  return !(x === -1);
};