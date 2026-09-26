/**
 * Дано число n, представляющее количество пар скобок. Нужно сгенерировать все возможные комбинации правильных скобочных последовательностей длины 2 * n.
 */

function generateParenthesis(n: number): string[] {
  const result: string[] = [];

  function weave(
    current: string[],
    n: number,
    result: string[],
    opened = 0,
    closed = 0,
  ) {
    // выходим, если исчерпан лимит
    if (current.length === 2 * n) {
      result.push([...current].join(""));
      return;
    }

    if (opened < n) {
      current.push("(");
      weave(current, n, result, opened + 1, closed);
      current.pop();
    }

    if (closed < opened) {
      current.push(")");
      weave(current, n, result, opened, closed + 1);
      current.pop();
    }
  }

  weave([], n, result, 0);

  return result;
}

function runParenthesesTests() {
  const tests = [
    {
      name: "Тест 1: Одна пара скобок",
      n: 1,
      expected: ["()"],
    },
    {
      name: "Тест 2: Две пары скобок",
      n: 2,
      expected: ["(())", "()()"],
    },
    {
      name: "Тест 3: Три пары скобок",
      n: 3,
      expected: ["((()))", "(()())", "(())()", "()(())", "()()()"],
    },
  ];

  console.log("=== ЗАПУСК ТЕСТОВ (СКОБКИ) ===");

  tests.forEach((test) => {
    try {
      const userResult = generateParenthesis(test.n);

      // Сортируем массивы строк для корректного сравнения
      const format = (arr: string[]) => JSON.stringify([...arr].sort());
      const isCorrect = format(userResult) === format(test.expected);

      if (isCorrect) {
        console.log(`✅ ${test.name} — ПРОЙДЕН`);
      } else {
        console.error(`❌ ${test.name} — ОШИБКА!`);
        console.log(`   Ожидалось: ${JSON.stringify(test.expected)}`);
        console.log(`   Получено:  ${JSON.stringify(userResult)}`);
      }
    } catch (e) {
      console.error(`💥 ${test.name} — Ошибка в коде:`, e);
    }
  });
}

runParenthesesTests();
