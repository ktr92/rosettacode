function longestPalindrome(s: string): string {
  
  const dp: number[][] = [];

  /**
   * dp[i][j] - равен true, если подстрока от i до j — палиндром
   * 
   * babad
   * [
   *  [1 0 1 0 0]
   *  [* 1 0 1 0]
   *  [* * 1 0 0]
   *  [* * * 1 0]
   *  [* * * * 1]
   * ]
   * 
   */

  let max = 0;

  for (let i = 0; i < s.length; i++) {
    dp[i] = []
    for (let j = i; j < s.length; j++) {
      // i начало подстроки
      // конец подстроки
      if (i === j) {
        dp[i][j] = 1;
        continue;
      } 
      
      // два символа подряд
      if (s[i+1] && s[i] === s[i+1]) {
        dp[i][i+1] = 1;
        max = 2;
        continue;
      }

      dp[i][j] = 0
    }
  }
      
 for (let i = 0; i < s.length; i++) {
    for (let j = 2; j < s.length; j++) {
      if (s[i+1] && s[i] === s[j] && dp[i+1][j-1] === 1) {
        dp[i][j] = 1
        max = 
      } 
    }
  }
  
  console.log(dp)

  return 1;
}

module.exports = longestPalindrome;
