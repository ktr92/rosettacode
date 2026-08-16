function longestPalindrome(s: string): string {
  
  const dp: boolean[][] = [[]];

  for (let i = 0; i < s.length; i++) {
    for (let j = 0; j < i; j++) {
      // i начало подстроки
      // конец подстроки
      if (i === j) dp[i][j] = true;
      
      // два символа подряд
      if (s[i+1] && s[i] === s[i+1]) {
        dp[i][i+1] = true
      }

      if (s[i+1] && s[i] === s[j]) {
        dp[i][j] = dp[i+1][j-1]
      } else {
        dp[i][j] = false
      }
    }
  }
  
  console.log(dp)

  return 1;
}

module.exports = longestPalindrome;
