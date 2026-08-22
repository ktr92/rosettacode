
/**
 * You are given a 2D array of integers envelopes where envelopes[i] = [wi, hi] represents the width and the      height of an envelope.

  One envelope can fit into another if and only if both the width and height of one envelope are greater than the other envelope's width and height.

  Return the maximum number of envelopes you can Russian doll (i.e., put one inside the other).

  Note: You cannot rotate an envelope.
  
  Example 1:

  Input: envelopes = [[5,4],[6,4],[6,7],[2,3]]
  Output: 3
  Explanation: The maximum number of envelopes you can Russian doll is 3 ([2,3] => [5,4] => [6,7]).
  Example 2:

  Input: envelopes = [[1,1],[1,1],[1,1]]
  Output: 1
 */
function maxEnvelopes(envelopes: number[][]): number {
    // [[5,4],[6,4],[6,7],[2,3]]]
    // Output: 3
    // ([2,3] => [5,4] => [6,7])

    // dp[i] - длина цепочки вложенных конвертов в [i]

    
    envelopes.sort((a: number[], b: number[]) => {
     if (a[0] === b[0]) return b[1] - a[1]
     return a[0] - b[0]
    })
    const mem = [];
    for (let i = 0; i < envelopes.length; i++) {
      let h = envelopes[i][1];
      let left = 0;
      let right = envelopes.length;
      
      while (left < right) {
       let mid = Math.floor((left + right) / 2);
       if (mem[mid] < h) {
        left = mid + 1;
       } else {
        right = mid;
       }
      }

      if (left < mem.length) {
       mem[left] = envelopes[i][1];
      } else {
       mem.push(h)
      }
    }

    return mem.length
};


module.exports = maxEnvelopes;