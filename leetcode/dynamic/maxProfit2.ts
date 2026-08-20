function maxProfit2(prices: number[]): number {
  // dp[i][j] - текущий профит если покупать в дату i
  const dp = [];
  let buy = 0;
  for (let i = 0; i < prices.length; i++) {
    dp[i] = [];
    for (let j = prices.length - 1; j > i; j--) {
      dp[i][j] = prices[j] - prices[i];
    }
  }
  console.log(dp);
  return 1;
}

module.exports = maxProfit2;
