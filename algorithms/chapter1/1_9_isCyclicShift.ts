/**
 * Допустим, что существует метод isSubstring, проверяющий, является ли
    одно слово подстрокой другого. Для двух строк sl и s2 напишите код, который проверяет, получена ли строка s2 циклическим сдвигом sl, используя
    только один вызов метода isSubstring (пример: слово waterbottle получено
    циклическим сдвигом erbottlewat).
 */

// waterbottle -> erbottlewat
function isCyclicShift(str1: string, str2: string): boolean {
  if (str1.length !== str2.length) return false;

  if (!(str2 + str2).includes(str1)) return false;
  return true;
}

export default isCyclicShift;
