function maxProfit(prices: number[]): number {
  // dp[i] - текущий профит
  // dp[0] = 0, 
  // max(dp[i], dp[i] - dp[i - 1])
  const dp = []
  dp[0] = prices[0];
  for(let i = 0; i < prices.length; i++) {
   dp[i] = Math.max(prices[i] - dp[i], dp[i])
  }
  console.log(dp)
  return Math.max(...dp)
};

module.exports = maxProfit