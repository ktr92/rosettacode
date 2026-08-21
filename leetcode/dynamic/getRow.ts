function getRow(rowIndex: number): number[] {
  const dp = [1];

  if (rowIndex < 1) return dp 
 
  for (let j = 1; j <= rowIndex; j++) {
    dp[j] = (dp[j-1] * (rowIndex - j + 1)) / j;
  }
  return dp;
}

module.exports = getRow;
