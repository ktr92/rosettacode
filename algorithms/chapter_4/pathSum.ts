/**
 * Дано бинарное дерево, в котором каждый узел содержит целое число (положительное или отрицательное). Разработайте алгоритм для подсчета всех
путей, сумма значений которых соответствует заданной величине. Обратите
внимание, что путь не обязан начинаться или заканчиваться в корневом или
листовом узле, но он должен идти вниз (переходя только от родительских
узлов к дочерним).
 */

// ============================================================================
// Определение узла дерева (LeetCode)
// ============================================================================
class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

function pathSum(root: TreeNode | null, targetSum: number): number {
  // Ваша логика

  if (!root) return 0;
  if (!root.left && !root.right) {
    if (root.val === targetSum) return 1;
    if (root.val !== targetSum) return 0;
  }

  function getDeep(summ: number, node: TreeNode | null, results: number[]) {
    if (summ === targetSum) {
      results.push(1);
    }

    if (node === null) {
      return;
    }
    const leftNode = node.left;
    const rightNoe = node.right;

    if (leftNode !== null) {
      getDeep(summ + leftNode.val, leftNode, results);
    }
    if (rightNoe !== null) {
      getDeep(summ + rightNoe.val, rightNoe, results);
    }
  }

  const results: number[] = [];
  getDeep(root.val, root, results);

  return results.length;
}

// ============================================================================
// ВСПОМОГАТЕЛЬНАЯ ФУНКЦИЯ ДЛЯ СБОРКИ ДЕРЕВА
// Строит дерево из массива в формате LeetCode (обход в ширину / BFS)
// ============================================================================
function buildTree(arr: (number | null)[]): TreeNode | null {
  if (arr.length === 0 || arr[0] === null) return null;

  const root = new TreeNode(arr[0]);
  const queue: TreeNode[] = [root];
  let i = 1;

  while (queue.length > 0 && i < arr.length) {
    const current = queue.shift()!;

    // Левый потомок
    if (i < arr.length && arr[i] !== null) {
      current.left = new TreeNode(arr[i]!);
      queue.push(current.left);
    }
    i++;

    // Правый потомок
    if (i < arr.length && arr[i] !== null) {
      current.right = new TreeNode(arr[i]!);
      queue.push(current.right);
    }
    i++;
  }

  return root;
}

// ============================================================================
// АВТОМАТИЧЕСКИЕ ТЕСТЫ
// ============================================================================
function runTests() {
  const tests = [
    {
      id: 1,
      name: "Классический случай (LeetCode #1)",
      array: [10, 5, -3, 3, 2, null, 11, 3, -2, null, 1],
      targetSum: 8,
      expected: 3,
    },
    {
      id: 2,
      name: "Сложные комбинации с нулем",
      // Дерево из Пример 2: 1 -> лево: -2 (лево: 1 -> лево: -1), право: 2
      array: [1, -2, null, 1, 2, -1],
      targetSum: 0,
      expected: 3,
    },
    {
      id: 3,
      name: "Бамбук (линейное дерево с нулями)",
      array: [2, null, 1, null, 0, null, 3],
      targetSum: 3,
      expected: 3,
    },
    {
      id: 4,
      name: "Пустое дерево (Краевой случай)",
      array: [],
      targetSum: 10,
      expected: 0,
    },
    {
      id: 5,
      name: "Узел равен targetSum",
      array: [5],
      targetSum: 5,
      expected: 1,
    },
  ];

  let passedCount = 0;

  console.log("=== ЗАПУСК ТЕСТОВ ===\n");

  for (const test of tests) {
    const root = buildTree(test.array);
    try {
      const result = pathSum(root, test.targetSum);
      if (result === test.expected) {
        console.log(`✅ Тест ${test.id} [${test.name}]: ПРОЙДЕН`);
        passedCount++;
      } else {
        console.error(
          `❌ Тест ${test.id} [${test.name}]: ПРОВАЛЕН! Ожидалось ${test.expected}, но получено ${result}`,
        );
      }
    } catch (e) {
      console.error(
        `💥 Тест ${test.id} [${test.name}]: Ошибка во время выполнения!`,
        e,
      );
    }
  }

  console.log(`\nИТОГ: Пройдено ${passedCount} из ${tests.length} тестов.`);
}

runTests();
