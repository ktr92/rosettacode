function climbStairs(n: number): number {
  // dp[0] = 0
  // dp[1] = 1
  // dp[i+1] = dp[i] + 1 || dp[i-1] + 2
  const dp = [];
  dp[0] = 0;
  dp[1] = 1;
  dp[2] = 2;

  if (n > 2) {
    for (let i = 3; i <= n; i++) {
      dp[i] = dp[i - 2] + dp[i - 1]
    }
  }
  return dp[n];
}

module.exports = climbStairs;
