function intToRoman(num: number): string {
 const symbolsMap = new Map([
    [1, "I"],
    [5, "V"],
    [10, "X"],
    [50, "L"],
    [100, "C"],
    [500, "D"],
    [1000, "M"],
  ]);

  const arrnum = num.toString().split('')

  let val = "";
  for (let i = arrnum.length - 1; i >=0; i--) {
    
  }

  return val;
}

module.exports = intToRoman;
