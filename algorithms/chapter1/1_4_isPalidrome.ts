/**
 * Напишите функцию, которая проверяет, является ли заданная строка перестановкой
   палиндрома. (Палиндром - слово или фраза, одинаково читающиеся
   в прямом и обратном направлении; перестановка - строка, содержащая те
   же символы в другом порядке.) Палиндром не ограничивается словами из
   словаря.
   Ilpuмep:
   Ввод: Tact Соа
   Вывод: True (перестановки: "taco cat", "atco cta", и т. д.)
 */

function isPalindrome(str: string): boolean {
  const counterMap = new Map<string, number>();

  for (let i = 0; i < str.length; i++) {
    const element = (str[i]  as string).toLowerCase();

    if (element === " ") continue;

    if (counterMap.has(element)) {
      let mapvalue = counterMap.get(element) as number;
      mapvalue++
      counterMap.set(element, mapvalue);
    } else {
      counterMap.set(element, 1);
    }
  }

  let contOdd = 0;

  for (const [_, v] of counterMap) {
    if (v % 2 !== 0) {
      contOdd++;
    }
    if (contOdd > 1) return false;
  }

  return true;

}


/* function isPalindromePermutation(str: string): boolean {
  const odds = new Set<string>();

  for (let i = 0; i < str.length; i++) {
    const ch = str[i].toLowerCase();
    if (ch === ' ') continue;

    if (odds.has(ch)) {
      odds.delete(ch);
    } else {
      odds.add(ch);
    }
  }

  return odds.size <= 1;
} */


console.log(isPalindrome('Tact Coa'))