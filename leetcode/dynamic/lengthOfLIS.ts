function lengthOfLIS(nums: number[]): number {
  // [4,10,4,3,8,9]
  // [4,8,9] -> 3
  // dp[i] - length of increasing subsequence before [i];
 /*  const dp = [];
  dp[0] = 1;
  for (let i = 0; i < nums.length; i++) {
   dp[i] = 1;
    for (let j = 0; j < i; j++) {
      if (nums[j] < nums[i] && dp[i] < dp[j] + 1) {
       dp[i] = dp[i] + 1;
      }
    }
  } */
  return binarySearchSolution(nums)
}

const binarySearchSolution = (nums: number[]): number => {
    const memo: number[] = [];

    for (let num of nums) {
        let left = 0, right = memo.length;

        while (left < right) {
            const mid = Math.floor((left + right) / 2);
            if (memo[mid] < num) {
                left = mid + 1;
            } else {
                right = mid;
            }
        }

        if (left < memo.length) {
            memo[left] = num;
        } else {
            memo.push(num);
        }
    }

    return memo.length;
}

module.exports = lengthOfLIS;
