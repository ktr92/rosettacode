function romanToInt(s: string): number {
  const symbolsMap = new Map([
    ["I", 1],
    ["V", 5],
    ["X", 10],
    ["L", 50],
    ["C", 100],
    ["D", 500],
    ["M", 1000],
  ]);

  let val = 0;
  for (let i = 0; i < s.length; i++) {

    const roman_i = symbolsMap.get(s[i]);
    const roman_i_1 = symbolsMap.get(s[i + 1]) || 0;

    
    if (roman_i_1 <= roman_i) {
      val += roman_i
    } else {
      val += -roman_i
    }

  }
  return val;
}

module.exports = romanToInt;
