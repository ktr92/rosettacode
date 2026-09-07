import isCyclicShift from "../../algorithms/chapter1/1_9_isCyclicShift";

describe('isCyclicShift используя единственный вызов isSubstring', () => {
  test('waterbottle -> erbottlewat (положительный кейс)', () => {
    expect(isCyclicShift('waterbottle', 'erbottlewat')).toBe(true);
  });

  test('aaab -> aaba (вращение на 1 позицию)', () => {
    expect(isCyclicShift('aaab', 'aaba')).toBe(true);
  });

  test('abab -> baba (вращение на 1 позицию)', () => {
    expect(isCyclicShift('abab', 'baba')).toBe(true);
  });

  test('abcde -> cdeab (положительный кейс середина)', () => {
    expect(isCyclicShift('abcde', 'cdeab')).toBe(true);
  });

  test('abcde -> deabc (положительный кейс конец)', () => {
    expect(isCyclicShift('abcde', 'deabc')).toBe(true);
  });

  test('не является циклическим сдвигом', () => {
    expect(isCyclicShift('abcde', 'abedc')).toBe(false);
  });

  test('разные длины строк — неверно', () => {
    expect(isCyclicShift('abc', 'ab')).toBe(false);
  });

  test('rotation на ноль (одинаковые строки)', () => {
    expect(isCyclicShift('abab', 'abab')).toBe(true);
  });
});