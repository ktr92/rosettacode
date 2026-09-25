/**
 * Дан массив уникальных целых чисел nums. Напишите функцию, которая возвращает все возможные подмножества (также называемые булеаном или power set) данного массива.
 * Подмножества могут быть любой длины — от пустого множества до полной копии исходного массива. Порядок вывода подмножеств в финальном массиве значения не имеет.
 * Пример:Входные данные: nums = [1, 2, 3]
 * Вывод: [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]]
 */

function weave(
  current: number[],
  nums: number[],
  result: number[][],
  length: number,
  start: number
) {
  if (current.length === length) {
    result.push([...current]);
    return;
  }

  for (let i = start; i < nums.length; i++) {
      current.push(nums[i]);
      weave(current, nums, result, length, i + 1);
      current.pop();
  }
}

function subsets(nums: number[]): number[][] {
  const results: number[][] = [];

  for (let i = 0; i <= nums.length; i++) {
    weave([], nums, results, i, 0);
  }

  return results;
}

// Тест 1: Базовый массив (3 элемента)
console.log("Тест 1 (Вход: [1, 2, 3]):");
console.log(subsets([1, 2, 3]));
// Ожидается массив из 8 подмножеств (длина финального массива = 2^3 = 8)

// Тест 2: Маленький массив (2 элемента)
console.log("\nТест 2 (Вход: [1, 2]):");
console.log(subsets([1, 2]));
// Ожидается вывод: [[], [1], [2], [1, 2]] (длина = 2^2 = 4)

// Тест 3: Крайний случай (Пустой массив)
console.log("\nТест 3 (Вход: []):");
console.log(subsets([]));
// Ожидается вывод: [[]] (длина = 2^0 = 1)
