function maximalSquare(matrix: string[][]): number {
  const dp: number[] = [];
  // dp[i][j] - размер квадрата, у которого i,j - нижний правый угол
  // maxrix[i][j] = 0 => dp[i][j] = 0;
  // matrix[i][j] = 1 => dp[i][j] = 1;
  // maxrix[i-1][j-1] = 1 && maxrix[i][j-1] && maxrix[i-1][j] = 1 => dp[i][j] = min(dp);
  // dp[0][j] = 0;
  // dp[i][0] = 0;
  let max = 0;
   dp[0] = Number(matrix[0][0]);
   dp[1] = Number(matrix[0][1]);
   dp[2] = Number(matrix[1][0]);
   dp[3] = 0;

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < (matrix[i] as string[]).length; j++) {
      dp[0] = dp[1];
      dp[1] = dp[2];
      dp[2] = dp[3];
      dp[3] = 0;
      if (i > 0 && j > 0) {
        if (matrix[i][j] === "1") {
          if (
            matrix[i - 1][j - 1] === "1" &&
            matrix[i][j - 1] === "1" &&
            matrix[i - 1][j] === "1"
          ) {
            dp[3] = Math.min(dp[0], dp[1], dp[2]) + 1;
          } else {
            dp[3] = 1;
          }
        } else {
          dp[3] = 0;
        } 
      } else {
         dp[3] = 0;
        }
      max = dp[3] > max ? dp[3] : max;
    }
  }

  return max * max;
}

module.exports = maximalSquare;
