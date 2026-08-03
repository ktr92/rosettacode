function intToRoman(num: number): string {
 const symbolsMap = new Map([
    ["I", 1],
    ["V", 5],
    ["X", 10],
    ["L", 50],
    ["C", 100],
    ["D", 500],
    ["M", 1000],
  ]);

  const arrnum = num.toString().split('')

  let val = 0;
  for (let i = arrnum.length - 1; i >=0; i--) {

    const roman_i = symbolsMap.get(s[i]);
    const roman_i_1 = symbolsMap.get(s[i + 1]) || 0;

    
    if (arrnum[i] <= arrnum[i]) {
      val += arrnum[i]
    } else {
      val += -arrnum[i]
    }

  }
  return val;
}

module.exports = romanToInt;
