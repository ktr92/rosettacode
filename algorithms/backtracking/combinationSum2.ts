/**
 * Дан массив целых чисел candidates и целевое число target. Найдите все уникальные комбинации чисел, которые в сумме дают target.
 * Ключевые отличия от предыдущей задачи:
 * Каждое число из массива candidates можно использовать только один раз в одной комбинации.
 * В самом массиве candidates могут быть одинаковые числа (например, две двойки).
 * В итоговом результате не должно быть дубликатов.
 * Комбинации [1, 2, 5] и [1, 5, 2] считаются одинаковыми (поэтому массив сначала обязательно нужно отсортировать).
 */

function weave(
  current: number[],
  nums: number[],
  result: number[][],
  target: number,
  start = 0,
  summ = 0,
) {
  if (summ === target) {
    result.push([...current]);
    return;
  }

  if (summ > target) {
    return;
  }

  for (let i = start; i < nums.length; i++) {
    if (nums[i - 1] && nums[i] === nums[i - 1] && i !== start) continue;

    current.push(nums[i]);
    weave(current, nums, result, target, i + 1, summ + nums[i]);

    current.pop();
  }
}

function combinationSum2(candidates: number[], target: number): number[][] {
  const results: number[][] = [];
  candidates.sort((a, b) => a - b);

  weave([], candidates, results, target);

  return results;
}

function runTests() {
  const tests = [
    {
      name: "Тест 1: Классический с дубликатами",
      candidates: [10, 1, 2, 7, 6, 1, 5],
      target: 8,
      // Ожидаемый результат (порядок массивов не важен)
      expected: [
        [1, 1, 6],
        [1, 2, 5],
        [1, 7],
        [2, 6],
      ],
    },
    {
      name: "Тест 2: Использование близнецов в одной комбинации",
      candidates: [2, 5, 2, 1, 2],
      target: 5,
      expected: [[1, 2, 2], [5]],
    },
    {
      name: "Тест 3: Числа уникальны, но повторения запрещены",
      candidates: [2, 3, 5],
      target: 6,
      expected: [], // [3, 3] брать нельзя, так как тройка всего одна
    },
  ];

  console.log("=== ЗАПУСК ТЕСТОВ ===");

  tests.forEach((test, index) => {
    try {
      const userResult = combinationSum2(test.candidates, test.target);

      // Сортируем для легкого сравнения строк
      const format = (arr: number[][]) =>
        JSON.stringify(arr.map((sub) => sub.sort((a, b) => a - b)).sort());

      const isCorrect = format(userResult) === format(test.expected);

      if (isCorrect) {
        console.log(`✅ ${test.name} — ПРОЙДЕН`);
      } else {
        console.error(`❌ ${test.name} — ОШИБКА!`);
        console.log(`   Ожидалось: ${JSON.stringify(test.expected)}`);
        console.log(`   Получено:  ${JSON.stringify(userResult)}`);
      }
    } catch (e) {
      console.error(`💥 ${test.name} — Вызвана ошибка в коде:`, e);
    }
  });
}

runTests();
