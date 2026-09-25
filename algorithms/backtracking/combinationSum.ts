/**
 * Дан массив уникальных целых чисел candidates и целевое число target. 
 * Напишите функцию, которая возвращает список всех уникальных комбинаций чисел, сумма которых равна target.
 * Главное правило: одно и то же число из массива candidates можно выбирать бесконечное количество раз. 
 * Но сами комбинации в результате должны быть уникальными (то есть [2, 2, 3] и [3, 2, 2] — это один и тот же дубликат, дважды выводить его нельзя).
 * 
 * Пример:Входные данные: candidates = [2, 3, 6, 7], target = 7
 * Вывод: [[2, 2, 3], [7]]
 * (Пояснение: 2 + 2 + 3 = 7, и само число 7 = 7).
 */

function weave(current: number[], nums: number[], result: number[][], target:number) {
 let summ = current.reduce((prev, val) => {
  return prev + val;
 }, 0)

 if (summ === target) {
  result.push([...current])
 }

 if (summ > target) {
  return []
 }



}

function combinationSum(candidates: number[], target: number): number[][] {
    const results: number[][] = [];
    
    weave([], candidates, results, target)
    
    return results;
}

// Тест 1: Из примера
console.log("Тест 1:");
console.log(combinationSum([2, 3, 6, 7], 7));
// Ожидаемый вывод: [[2, 2, 3], [7]]

// Тест 2: Нет подходящих вариантов
console.log("\nТест 2:");
console.log(combinationSum([2, 4], 5));
// Ожидаемый вывод: [] (так как из четных чисел нельзя собрать 5)

// Тест 3: Одно число
console.log("\nТест 3:");
console.log(combinationSum([2], 8));
// Ожидаемый вывод: [[2, 2, 2, 2]]