function maxProfit2(prices: number[]): number {
  // всегда покупать если след.меньше.
  // dp[i] - профит на дату i
  const dp = [];

  for (let i = 0; i < prices.length; i++) {
      let profit = prices[i] - prices[i-1]
      if (profit > 0) {
        dp[i] = profit
      } else {
        dp[i] = 0
      }
  }
  return dp.reduce((accumulator, current) => accumulator + current, 0);
}

module.exports = maxProfit2;
