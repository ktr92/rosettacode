class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  size: number;

  constructor(val: number) {
    this.val = val;
    this.left = null;
    this.right = null;
    this.size = 1;
  }
}

class RandomizedBST {
  private root: TreeNode | null;

  constructor() {
    this.root = null;
  }

  /**
   * Вставляет значение в BST.
   */
  insert(val: number): void {
    const node = new TreeNode(val);

    if (this.root === null) {
      this.root = node;
      return;
    }

    let current = this.root;
    while (true) {
      current.size = current.size + 1;

      if (node.val > current.val) {
        if (current.right === null) {
          current.right = node;
          break;
        }
        current = current.right;
      } else {
        if (current.left === null) {
          current.left = node;
          break;
        }
        current = current.left;
      }
    }
  }

  /**
   * Ищет узел с заданным значением. Возвращает true, если найден.
   */
  find(val: number): boolean {
    let current = this.root;
    while (true) {
      if (current === null) break;

      if (current.val === val) return true;

      if (val > current.val) {
        current = current.right;
      } else {
        current = current.left;
      }
    }

    return false;
  }

  /**
   * Удаляет значение из BST.
   */
  delete(val: number): void {
    // Запускаем рекурсивное удаление от корня и обновляем сам корень дерева
    this.root = this.deleteNode(this.root, val);
  }

  private deleteNode(node: TreeNode | null, val: number): TreeNode | null {
    // Базовый случай: узел не найден в дереве
    if (node === null) return null;

    // 1. Ищем узел в левом или правом поддереве
    if (val > node.val) {
      node.right = this.deleteNode(node.right, val);
    } else if (val < node.val) {
      node.left = this.deleteNode(node.left, val);
    } else {
      // 2. МЫ НАШЛИ УЗЕЛ! Разбираем 3 сценария удаления:

      // Сценарий 1 и 2: Нет детей или только один ребенок
      if (node.left === null) return node.right;
      if (node.right === null) return node.left;

      // Сценарий 3: У узла два ребенка
      // Находим преемника (минимальный узел в его правом поддереве)
      let successor = node.right;
      while (successor.left !== null) {
        successor = successor.left;
      }

      // Копируем значение преемника в текущий узел
      node.val = successor.val;

      // Рекурсивно удаляем преемника из правого поддерева
      node.right = this.deleteNode(node.right, successor.val);
    }

    // 3. ОБНОВЛЕНИЕ SIZE (Когда стек рекурсии возвращается обратно вверх)
    // Размер текущего поддерева всегда равен: 1 (сам узел) + левый подразмер + правый подразмер
    const leftSize = node.left ? node.left.size : 0;
    const rightSize = node.right ? node.right.size : 0;
    node.size = 1 + leftSize + rightSize;

    return node;
  }

  /**
   * Возвращает значение случайного узла дерева.
   * Вероятность выбора каждого узла должна быть строго одинаковой (1 / N).
   */

  getRandomNode(): number {
    if (!this.root) return 0;
    
    let current = this.root;
    let rand = this.getRandomIntInclusive(1, current.size);

    while (true) {
      

      let leftSize = current.left ? current.left.size : 0;

      if (rand <= leftSize) {
        current = current.left!;
      } else if (rand === leftSize + 1) {
        return current.val
      } else {
        rand = rand - leftSize - 1;
        current = current.right!;
      }


    }
  }

  private getRandomIntInclusive(min: number, max: number): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}

/**
 * 
 *      5
       / \
      3   7
     /   / \
    1   6   8


 */

// Создаем экземпляр дерева
const bst = new RandomizedBST();

// Тест 1: Наполнение дерева данными
const values = [5, 3, 7, 1, 6, 8];
values.forEach((v) => bst.insert(v));

console.log(bst);

console.log("--- Тест 1: Проверка базового поиска ---");
console.log("Поиск 6 (Ожидается true):", bst.find(6));
console.log("Поиск 10 (Ожидается false):", bst.find(10));

console.log("\n--- Тест 2: Проверка равномерности getRandomNode ---");
// Объект для подсчета того, сколько раз выпал каждый узел
const counts: Record<number, number> = { 1: 0, 3: 0, 5: 0, 6: 0, 7: 0, 8: 0 };
const totalRuns = 60000; // 60 тысяч запусков

for (let i = 0; i < totalRuns; i++) {
  const randomVal = bst.getRandomNode();
  if (randomVal in counts) {
    counts[randomVal]++;
  }
}

console.log(
  `Результаты после ${totalRuns} симуляций (идеально для каждого ~10 000):`,
);
for (const val in counts) {
  console.log(
    `Узел ${val} выпал: ${counts[val]} раз (${((counts[val] / totalRuns) * 100).toFixed(2)}%)`,
  );
}

console.log("\n--- Тест 3: Проверка после удаления узла ---");
bst.delete(3); // Удаляем узел 3, его левый ребенок (1) должен остаться в дереве

const countsAfterDelete: Record<number, number> = {
  1: 0,
  5: 0,
  6: 0,
  7: 0,
  8: 0,
};
const newTotalRuns = 50000; // 50 тысяч запусков (теперь узлов осталось 5)

for (let i = 0; i < newTotalRuns; i++) {
  const randomVal = bst.getRandomNode();
  if (randomVal in countsAfterDelete) {
    countsAfterDelete[randomVal]++;
  }
}

console.log("Поиск удаленного узла 3 (Ожидается false):", bst.find(3));
console.log("Поиск узла 1 (Ожидается true):", bst.find(1));
console.log(`Результаты после удаления (идеально для каждого ~10 000):`);
for (const val in countsAfterDelete) {
  console.log(
    `Узел ${val} выпал: ${countsAfterDelete[val]} раз (${((countsAfterDelete[val] / newTotalRuns) * 100).toFixed(2)}%)`,
  );
}
