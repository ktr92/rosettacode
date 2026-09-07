/**
 * Допустим, что существует метод isSubstring, проверяющий, является ли
    одно слово подстрокой другого. Для двух строк sl и s2 напишите код, который проверяет, получена ли строка s2 циклическим сдвигом sl, используя
    только один вызов метода isSubstring (пример: слово waterbottle получено
    циклическим сдвигом erbottlewat).
 */
function isCyclicShift(str1: string, str2: string): boolean {
 
 if (str1.length !== str2.length) return false;

 const arr1 = str1.split('')
 const arr2 = str2.split('')

 let startIndex = 0;
 while (arr1[startIndex] !== arr2[0] && arr2[startIndex] !== arr1[0] && startIndex < arr1.length && startIndex < arr2.length) {
  startIndex++
 }
 let first = arr1[startIndex] === arr2[0] ? arr1 : arr2;
 let second = arr1[startIndex] === arr2[0] ? arr2 : arr1;

 let left = 0;
 let right = startIndex;
 while (first[right] === second[left] && right < first.length - 1) {
  right++
  left++
 }

 console.log(first[right])

 return true;
} 

export default isCyclicShift;