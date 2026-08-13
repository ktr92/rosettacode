function longestPalindrome(s: string): string {
  const arr = s.split("");
  let result = "";

  const check_Palindrome = (str: string) => {
    const rev = str.split("").reverse();
    return str.split("").every((v, i) => v === rev[i]);
  };

  const getNext = (n: number, limit: number, level: number) => {
    for (let index = n; index < limit; index++) {
      const newlimit = index + level;
      const tmp = [];
      tmp.push(arr[index - level], arr[index], arr[index + level]);

      if (check_Palindrome(tmp.join(""))) {
        getNext(index, newlimit, 3);
        result = tmp.join("");
      }
    }
  };

  getNext(0, arr.length, 3);

  return result;
}

module.exports = longestPalindrome;
