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

/**
 * Бинарное дерево поиска было создано обходом массива слева направо и вставкой каждого элемента. Для заданного бинарного дерева поиска с разными
элементами выведите все возможные массивы, которые могли привести
к созданию этого дерева.
 *  2
   / \
  1   3
 * 
  Вывод: {2, 1, 3}, {2, 3, 1}
 */

function weaveLists(
  first: number[],
  second: number[],
  prefix: number[],
  results: number[][],
  i: number = 0,
  j: number = 0,
): void {
  // Базовые случаи окончания массивов
  if (i === first.length) {
    results.push([...prefix, ...second.slice(j)]);
    return;
  }
  if (j === second.length) {
    results.push([...prefix, ...first.slice(i)]);
    return;
  }

  // Ход А
  prefix.push(first[i]);
  weaveLists(first, second, prefix, results, i + 1, j);
  prefix.pop();

  // Ход Б
  prefix.push(second[j]);
  weaveLists(first, second, prefix, results, i, j + 1);
  prefix.pop();
}

function bstSequences(root: TreeNode | null): number[][] {
  if (root === null) return [[]];
  if (root.left === null && root.right === null) return [[root.val]];

  const leftBst = bstSequences(root.left);
  const rightBst = bstSequences(root.right);
  const combination: number[][] = [];

  for (const lb of leftBst) {
    for (const rb of rightBst) {
      const prefix: number[] = [root.val];
      weaveLists(lb, rb, prefix, combination);
    }
  }

  return combination;
}

/* const root = new TreeNode(2);
root.left = new TreeNode(1);
root.right = new TreeNode(3);

// Вызываем функцию
const result = bstSequences(root);

console.log(result); */

// --- ПОСТРОЕНИЕ БОЛЬШОГО ДЕРЕВА ---

const root = new TreeNode(4);

// Левое поддерево
root.left = new TreeNode(2);
root.left.left = new TreeNode(1);
root.left.right = new TreeNode(3);

// Правое поддерево
root.right = new TreeNode(5);
root.right.right = new TreeNode(6);

// --- ЗАПУСК ТЕСТА ---

const allArrays = bstSequences(root);

console.log(`Всего найдено вариантов: ${allArrays.length}\n`);
console.log("Список всех возможных массивов:");

allArrays.forEach((arr, index) => {
  console.log(`${String(index + 1).padStart(2, "0")}: [${arr.join(", ")}]`);
});
