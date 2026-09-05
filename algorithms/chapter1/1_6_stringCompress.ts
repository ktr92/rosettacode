/**
 * Реализуйте метод для выполнения простейшего сжатия строк с использованием
    счетчика повторяющихся символов. Например, строка ааЬсссссааа превращается
    в а2Ыс5аЗ. Если ~сжатая» строка не становится короче исходной,
    Вопросы собеседования 83
    то метод возвращает исходную строку. Предполагается, что строка состоит
    только из букв верхнего и нижнего регистра (a-z).
 */

function stringCompress(str: string): string {
  let compressed = [];
  let i = 0;
  let counter = 1;
  while (i < str.length) {
    if (str[i + 1] && str[i] === str[i + 1]) {
      counter++;
    } else {
      compressed.push(str[i], counter)
      counter = 1;
    }
    i++;
  }

  return compressed.length < str.length ? compressed.join('') : str;
}

console.log(stringCompress("aabcccccaaa")); // a2b1c5a3
console.log(stringCompress("abcdef")); // abcdef
console.log(stringCompress("aabbccdd")); // aabbccdd (не короче)
console.log(stringCompress("a")); // a
console.log(stringCompress("")); // 
console.log(stringCompress("zzzaaa")); // z3a3
console.log(stringCompress("abababa")); // abababa (не короче)
console.log(stringCompress("aaaaabbbbcc")); // a5b4c2
console.log(stringCompress("ABcdEE")); // ABcdEE (не короче)
