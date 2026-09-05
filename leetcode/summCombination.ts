type Quad = [number, number, number, number];

/**
 * Найти все решения уравнения a^x + b^x = c^x + d^x
 * для целых a, b, c, d в диапазоне [1..n].
 *
 * Возвращает массив Quad, где каждый элемент имеет вид:
 * [c, d, a, b] — т.е. найденная левая пара следует за правой.
 *
 * Пример использования:
 * const sols = summCombination(10, 3);
 * console.log(sols.length);
 *
 * Примечания:
 * - Время O(n^2) по количеству пар, память O(n^2) для хранения уже встреченных сумм.
 * - x ожидается как положительное целое число.
 *
 * @param n - верхняя граница диапазона (1..n)
 * @param x - показатель степени (целое положительное число)
 * @returnsQuad[] Массив решений в формате [c, d, a, b]
 */
function summCombination(n: number, x: number): Quad[] {
  const combo: Quad[] = [];
  // сумма s = a^x + b^x -> список пар [a, b] с этой суммой
  const hashMap = new Map<number, Array<[number, number]>>();

  for (let c = 1; c <= n; c++) {
    for (let d = 1; d <= n; d++) {
      const result = c ** x + d ** x;
      const existing = hashMap.get(result);
      if (existing) {
        for (const [a, b] of existing) {
          combo.push([c, d, a, b]);
        }
        existing.push([c, d]);
      } else {
        hashMap.set(result, [[c, d]]);
      }
    }
  }

  return combo;
}

console.log(summCombination(100, 3));
