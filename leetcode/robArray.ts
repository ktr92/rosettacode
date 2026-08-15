function rob(nums: number[]): number {
  if (nums.length < 2) return nums[0];
  const dp = []
  dp[0] = nums[0]
  dp[1] = nums[1]

  if (nums.length > 2) {
    for (let i = 2; i < nums.length; i++) {
      dp[i] = Math.max(dp[i-1], dp[i-2] + nums[i]);

      if (i >= 3) {
        dp[i] = Math.max(dp[i], dp[i-3] + nums[i]);
      }
    }
  } else {
    dp[nums.length - 1] = Math.max(dp[1], dp[0]);
  }
  return dp[nums.length - 1];
}
module.exports = rob;
