function longestCommonPrefix(strs: string[]): string {
  // ["flower","flow","flight"]

  const sorted = strs.sort((a, b) => (a.length < b.length ? -1 : 1));
  let common = sorted[0] ? sorted[0] : "";

  for (let i = 1; i < strs.length; i++) {
   const word = sorted[i]
   if (word) {
     for (let j = word.length - 1; j >= 0; j--) {
     if (common[j] && word[j] && word[j] !== common[j]) {
       common = common.slice(0, j)
       continue;
     }
    }
   }
   
  }

  // "fl"
  return common;
}
module.exports = longestCommonPrefix;
