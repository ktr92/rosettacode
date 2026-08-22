function maxProfit2(prices: number[]): number {
  // если в плюсе, продавать и покупать в тот же день.
  // dp[i] - профит на дату i
  let max = 0;
  for (let i = 0; i < prices.length; i++) {
      let profit = prices[i] - prices[i-1];
      max += profit > 0 ? profit : 0;
  }
  return max
}

module.exports = maxProfit2;
