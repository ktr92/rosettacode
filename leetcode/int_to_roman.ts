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

  const arrnum = num.toString().split("");

  let val = "";
  let summ = [];
  console.log(arrnum);
  for (let i = 0; i < arrnum.length; i++) {
    if (i > 0) {
      summ.unshift(Number(arrnum[arrnum.length - 1 - i]) * Math.pow(10, i));
    } else {
      summ.unshift(Number(arrnum[arrnum.length - 1 - i]));
    }
  }

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

  for (let i = 0; i < summ.length; i++) {
    if (symbolsMap.has(summ[i])) {
      val += symbolsMap.get(summ[i]);
    } else {
      if (summ[i] > 1000) {
        val += consecutiveForm(summ[i], 1000);
      } else if (summ[i] >= 500 && summ[i] !== 900) {
        val += substractiveForm(summ[i], 100, 500);
      } else if (summ[i] >= 100 && summ[i] !== 400) {
        val += consecutiveForm(summ[i], 100);
      } else if (summ[i] >= 50 && summ[i] !== 90) {
        val += substractiveForm(summ[i], 10, 50);
      } else if (summ[i] >= 10 && summ[i] !== 40) {
        val += consecutiveForm(summ[i], 10);
      } else if (summ[i] >= 5 && summ[i] !== 9) {
        val += substractiveForm(summ[i], 1, 5)
      } else {
        val += consecutiveForm(summ[i], 1)
      }
    }
  }
  return val;
}
intToRoman(3749);

module.exports = intToRoman;
