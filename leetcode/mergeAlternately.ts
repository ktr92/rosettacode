function mergeAlternately(word1: string, word2: string): string {
  let p = 0;
  let result = "";
  while (word1[p] || word2[p]) {
    result += (word1[p] || "") + (word2[p] || "");
    p++;
  }
  return result;
}

module.exports = mergeAlternately;
