/**
 * Given two strings text1 and text2, return the length of their longest common subsequence. If there is no common subsequence, return 0.

A subsequence of a string is a new string generated from the original string with some characters (can be none) deleted without changing the relative order of the remaining characters.

For example, "ace" is a subsequence of "abcde".
A common subsequence of two strings is a subsequence that is common to both strings.

 

Example 1:

Input: text1 = "abcde", text2 = "ace" 
Output: 3  
Explanation: The longest common subsequence is "ace" and its length is 3.
Example 2:

Input: text1 = "abc", text2 = "abc"
Output: 3
Explanation: The longest common subsequence is "abc" and its length is 3.
Example 3:

Input: text1 = "abc", text2 = "def"
Output: 0
Explanation: There is no such common subsequence, so the result is 0.
 

Constraints:

1 <= text1.length, text2.length <= 1000
text1 and text2 consist of only lowercase English characters.

 * @param text1 
 * @param text2 
 */
function longestCommonSubsequence(text1: string, text2: string): number {
  // dp[i][j] - длина наибольшего совпадения до индекса i первого слова и до j второго слова.
  const dp: number[][] = [];
  dp[0] = text1[0] === text2[0] ? [1] : [0];

  const len1 = text1.length;
  const len2 = text2.length;
  for (let i = 0; i < len1; i++) {
    dp[i] = [];

    for (let j = 0; j < len2; j++) {

     if (text1[i] === text2[j]) {
  
     }
    }
  }
  
  return max;
}

export default longestCommonSubsequence;
