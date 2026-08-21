function countBits(n: number): number[] {
  const dp = [0];
  dp[1] = 1;

  for (let i = 1; i <= n; i++) {

   if (i % 2 !== 0) {
    dp[i] = dp[i-1] + 1;
   } else {
    let k = Math.floor(i / 2);
    dp[i] = dp[i - k] * 10;
   }
  }
  console.log(dp)
  return dp
}

module.exports = countBits;
