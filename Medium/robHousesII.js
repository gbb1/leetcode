/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {

  function robHouses(start, end) {
      let main = 0;
      let skip = 0;
      let temp;

      for (let i = start; i < end; i++) {
          temp = Math.max(main + nums[i], skip);
          main = skip;
          skip = temp;
      }

      return skip;
  }

  return Math.max(robHouses(0, nums.length - 1), robHouses(1, nums.length));

};