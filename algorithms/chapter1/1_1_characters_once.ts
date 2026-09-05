/**
 * Проверка уникальности символов без дополнительных структур данных.
 * Время: O(n^2)
 * Память: O(1) (без учёта входной строки)
 */
function isUniqueNoDS(str: string): boolean {
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j < str.length; j++) {
      if (str[i] === str[j]) {
        return false;
      }
    }
  }
  return true;
}

/**
 * Проверка уникальности с использованием Map (хеш-таблица).
 * Время: O(n) в среднем
 * Память: O(n)
 */
function isUniqueWithMap(str: string): boolean {
  const seen = new Map<string, boolean>();
  for (let i = 0; i < str.length; i++) {
    const ch = str[i];
    if (seen.has(ch)) {
      return false;
    }
    seen.set(ch, true);
  }
  return true;
}

/**
 * Проверка уникальности путём сортировки.
 * Время: O(n log n)
 * Память: O(n)
 */
function isUniqueWithSorting(str: string): boolean {
  const arr = str.split('');
  arr.sort();
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === arr[i - 1]) {
      return false;
    }
  }
  return true;
}

/**
 * Проверка уникальности через фиксированный массив-флагов для ASCII.
 * Время: O(n)
 * Память: O(1) (при условии диапазона ASCII до 128)
 * Примечание: для не-ASCII символов нужно другой подход (Set/Map или расширение диапазона).
 */
function isUniqueWithCharCode(str: string): boolean {
  const chars = Array(128).fill(false);
  for (let i = 0; i < str.length; i++) {
    const code = str[i].charCodeAt(0);
    if (code < 128) {
      if (chars[code]) {
        return false;
      }
      chars[code] = true;
    } else {
      // Не ASCII: заменяем на обработку через Set/Map или увеличиваем диапазон
      return false;
    }
  }
  return true;
}


/**
 * Проверка уникальности символов через Set.
 * Время: O(n) в среднем
 * Память: O(n) в худшем случае
 */
const isUniqueWithSet = (str: string): boolean => new Set(str).size === str.length;

console.log(isUniqueWithSet("abc"));
console.log(isUniqueWithSet("abcb"));
console.log(isUniqueWithSet("aa"));

/* console.log(isUnique_js("abc"));
console.log(isUnique_js("abcb"));
console.log(isUnique_js("aa")); */
