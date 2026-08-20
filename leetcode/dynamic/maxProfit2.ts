function maxProfit2(prices: number[]): number {
  // dp[i][j] - текущий профит если покупать в дату i
  const dp = [];
  let buy = 0;
  for (let i = 0; i < prices.length; i++) {
    dp[i] = [];
    if (j <= i) {
      dp[i][j] = 0;
    } else {
      for (let j = prices.length - 1; j >= 0; j--) {
      dp[i][j] = prices[j] - prices[i] >= 0 ? prices[j] - prices[i] : 0;
    }
    }
   
  }
  console.log(dp);
  return 1;
}

module.exports = maxProfit2;
