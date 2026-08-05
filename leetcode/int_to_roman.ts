function intToRoman(num: number): string {
  const symbolsMap = new Map([
    [1, "I"],
    [4, "IV"],
    [5, "V"],
    [9, "IX"],
    [10, "X"],
    [40, "XL"],
    [50, "L"],
    [90, "XC"],
    [100, "C"],
    [400, "CD"],
    [500, "D"],
    [900, "CM"],
    [1000, "M"],
  ]);

  const arrnum = num.toString().split("").map((_, i, arr) => {
     return Number(arr[arr.length - 1 - i]) * (i > 0 ? Math.pow(10, i) : 1); 
  }).reverse();


  let val = "";
  const consecutiveForm = (num: number, range: number) => {
    let result = "";
    const del = num / range;
    const sym = symbolsMap.get(range);
    for (let k = 0; k < del; k++) {
      result += sym;
    }
    return result;
  };
  const substractiveForm = (num: number, range: number, substtact: number) => {
    let result = symbolsMap.get(substtact);
    const diff = num - substtact;
    if (diff) {
      const del = diff / range;
      for (let k = 0; k < del; k++) {
        result += symbolsMap.get(range);
      }
    }
    return result;
  };

  for (let i = 0; i < arrnum.length; i++) {
    const item = arrnum[i];
    if (symbolsMap.has(item)) {
      val += symbolsMap.get(item);
    } else {
      if (item > 1000) {
        val += consecutiveForm(item, 1000);
      } else if (item >= 500 && item !== 900) {
        val += substractiveForm(item, 100, 500);
      } else if (item >= 100 && item !== 400) {
        val += consecutiveForm(item, 100);
      } else if (item >= 50 && item !== 90) {
        val += substractiveForm(item, 10, 50);
      } else if (item >= 10 && item !== 40) {
        val += consecutiveForm(item, 10);
      } else if (item >= 5 && item !== 9) {
        val += substractiveForm(item, 1, 5)
      } else {
        val += consecutiveForm(item, 1)
      }
    }
  }
  return val;
}


module.exports = intToRoman;
