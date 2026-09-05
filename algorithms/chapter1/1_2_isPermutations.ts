/**
 *  Для двух строк напишите метод, определяющий, является ли одна строка
перестановкой другой.
 */

/**
 * Используется частотный словарь (Map<string, number>).
 * Время: O(n) в среднем
 * Память: O(n)
 */
function isPermutation(str1: string, str2: string) {
  const map = new Map<string, number>();
  for (let i = 0; i < str1.length; i++) {
    if (map.has(str1[i])) {
      let val = map.get(str1[i]);
      map.set(str1[i], val++);
    } else {
      map.set(str1[i], 1);
    }
  }

   for (let i = 0; i < str2.length; i++) {
    if (map.has(str2[i])) {
      let val = map.get(str2[i]);
      if (val === 1) {
       map.delete(str2[i])
      } else {
       map.set(str2[i], val--);
      }
    } else {
      return false
    }
   }

   if (map.size > 0) {
    return false
   } else {
    return true
   }
}

/**
 * Проверка перестановки через сортировку.
 * Время: O(n log n)
 * Память: O(n)
 */
function isPermutationSort(str1: string, str2: string): boolean {
  if (str1.length !== str2.length) return false;

  const a = str1.split('').sort();
  const b = str2.split('').sort();

  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) return false;
  }
  return true;
}

console.log(isPermutation("abc", "bca")); // true
console.log(isPermutation("abc", "ab")); // false
console.log(isPermutation("abc", "aabc")); // false
console.log(isPermutation("abc", "abcd")); // false
