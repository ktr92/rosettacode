function summCombination(n: number, x: number) {
  // a^3 + b^3 = c^3 + d^3;
  // a,b,c,d = [1...n]
  // вывести все решения уравнения
  const combo = [];

  const hashMap = new Map();
  for (let c = 1; c <= n; c++) {
    for (let d = 1; d <= n; d++) {
      const result = c ** x + d ** x;
      if (!hashMap.get(result)) {
        hashMap.set(result, []);
      }
      hashMap.get(result).push([c, d]);
    }
  }

  for (const [result, pairs] of hashMap) {
    for (const pair in pairs) {
    }
  }

  for (let a = 1; a <= n; a++) {
    for (let b = 1; b <= n; b++) {
      const result = a ** x + b ** x;
      const pairs = hashMap.get(result);

      for (let i = 0; i < pairs.length; i++) {
        combo.push([a, b, ...pairs[i]]);
      }
    }
  }
  return combo;
}

console.log(summCombination(3, 2));
