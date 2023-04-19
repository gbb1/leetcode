/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
  this.storage = nums || [];
  this.memo = new Array(nums.length).fill(0);

  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
      sum += nums[i];
      this.memo[i] = sum;
  }
};

/**
* @param {number} left
* @param {number} right
* @return {number}
*/
NumArray.prototype.sumRange = function(left, right) {
  if (left > this.storage.length || right > this.storage.length) {
      return;
  }

  if (left > 0) {
      return this.memo[right] - this.memo[left - 1];
  } else {
      return this.memo[right];
  }

};

/**
* Your NumArray object will be instantiated and called as such:
* var obj = new NumArray(nums)
* var param_1 = obj.sumRange(left,right)
*/