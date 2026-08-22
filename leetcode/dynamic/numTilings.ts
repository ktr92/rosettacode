function numTilings(n: number): number {
    const dp = [];
    dp[0] = 1;
    dp[1] = 1;
    dp[2] = 2;

    let modulo = 1000000007;
    
    for (let i = 3; i <= n; i++) {
     dp[i] = (dp[i-1] * 2 + dp[i-3]) % modulo;
    }
    return dp[n]
};

module.exports = numTilings;