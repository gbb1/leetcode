const nonAdjacentSum = (nums) => {

  let memo = new Array(nums.length).fill(0);
  memo[nums.length - 1] = nums[nums.length - 1];
  memo[nums.length - 2] = Math.max(nums[nums.length - 2], nums[nums.length -1]);

  for (let i = nums.length - 3; i > -1; i--) {
    memo[i] = Math.max(nums[i] + memo[i + 2], memo[i+1]);
  }

  return memo[0];

};