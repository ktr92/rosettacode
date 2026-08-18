function maximalSquare(matrix: string[][]): number {
  const dp: number[] = Array(matrix[0]?.length).fill(0);
  // dp[i][j] - размер квадрата, у которого i,j - нижний правый угол
  // maxrix[i][j] = 0 => dp[i][j] = 0;
  // matrix[i][j] = 1 => dp[i][j] = 1;
  // maxrix[i-1][j-1] = 1 && maxrix[i][j-1] && maxrix[i-1][j] = 1 => dp[i][j] = min(dp);
  // dp[0][j] = 0;
  // dp[i][0] = 0;
  let max = 0;
  let prev = Number(matrix[0][0]);

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < (matrix[i] as string[]).length; j++) {
      prev = dp[j]
      if (i > 0 && j > 0) {
        if (matrix[i][j] === "1") {
          if (
            matrix[i - 1][j - 1] === "1" &&
            matrix[i][j - 1] === "1" &&
            matrix[i - 1][j] === "1"
          ) {
            
            dp[j] = Math.min(dp[j-1] || 0, dp[j] || 0, prev) + 1;
            continue;
          } 
        }
      }
      dp[j] = Number(matrix[i][j]);
      
    }
    let stepMax = Math.max(prev, ...dp);
    max = stepMax > max ? stepMax : max;


  }

  return max * max;
}

module.exports = maximalSquare;
