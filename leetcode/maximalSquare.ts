function maximalSquare(matrix: string[][]): number {
  const dp: number[][] = [];
  // dp[i][j] - размер квадрата, у которого i,j - нижний правый угол
  // maxrix[i][j] = 0 => dp[i][j] = 0;
  // matrix[i][j] = 1 => dp[i][j] = 1;
  // maxrix[i-1][j-1] = 1 && maxrix[i][j-1] && maxrix[i-1][j] = 1 => dp[i][j] = min(dp);
  // dp[0][j] = 0;
  // dp[i][0] = 0;
  let max = 0;
  for (let i = 0; i < matrix.length; i++) {
    dp[i] = [];
    for (let j = 0; j < (matrix[i] as string[]).length; j++) {
     
      if (i > 0 && j > 0) {
        if (matrix[i][j] === "1") {
          if (
            matrix[i - 1][j - 1] === "1" &&
            matrix[i][j - 1] === "1" &&
            matrix[i - 1][j] === "1"
          ) {
            dp[i][j] = Math.min(dp[i - 1][j - 1], dp[i][j - 1], dp[i - 1][j]) + 1;
          } else {
            dp[i][j] = 1;
          }
        } else {
          dp[i][j] = 0;
        }
      } else {
       dp[i][j] = Number(matrix[i][j])
      }
    }
    const strmax = Math.max(...dp[i]?.flat());
    max = strmax > max ? strmax : max;
  }

  return max * max;
}

module.exports = maximalSquare;
