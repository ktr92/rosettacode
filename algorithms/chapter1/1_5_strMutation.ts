/**
 * Существуют три вида модифицирующих операций со строками: вставка
   символа, удаление символа и замена символа. Напишите функцию, которая
   проверяет, находятся ли две строки на расстоянии одной модификации (или
   нуля модификаций).
   Ilpuмep:
   pale, ple -> true
   pales, pale -> true
   pale, bale -> true
   pale, bake -> false
 */

function modificationDistance(str1: string, str2: string) {
  const diffLen = Math.abs(str1.length - str2.length);
  if (diffLen > 1) return false;

  let diff = 0;
  let j = 0;
  for (let i = 0; i < str1.length; i++) {
    if (str1[i] !== str2[j]) {
      diff++;
      if (diff > 1) return false;
      if (str1.length === str2.length) {
        j++;
      }
      if (str1.length < str2.length) {
        i--;
        j++;
      }
    } else {
      j++;
    }
  }

  return true;
}

console.log(modificationDistance("pale", "ple")); // true
console.log(modificationDistance("ple", "pale")); // true
console.log(modificationDistance("pales", "pale")); // true
console.log(modificationDistance("pale", "bale")); // true
console.log(modificationDistance("pale", "bake")); // false
console.log(modificationDistance("kitten", "sitting")); // false
