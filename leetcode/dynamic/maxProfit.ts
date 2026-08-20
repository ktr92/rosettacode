function maxProfit(prices: number[]): number {
  // dp[i] - текущий профит
  const dp = [];
  let min = prices[0];
  dp[0] = prices[0];
  for(let i = 0; i < prices.length; i++) {
    const price = prices[i]
    if (price < min) {
      min = price
      dp[i] = 0
    } else {
      dp[i] = price - min;
    }
  }
  return Math.max(...dp)
};

module.exports = maxProfit