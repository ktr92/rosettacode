function pascalTriangle(numRows: number): number[][] {
  const dp = [];
  dp[0] = [1];

  for (let i = 1; i < numRows; i++) {
    dp[i] = [1];
    for (let j = 1; j < Math.floor(i / 2) + 1; j++) {      
      dp[i][j] = dp[i - 1][j - 1] + dp[i - 1][j];
      dp[i][i - j] = dp[i][j];
    }
    dp[i][i] = 1;
   
  }
  return dp;
}

module.exports = pascalTriangle;
