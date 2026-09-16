class Node {
  val: number;
  left: Node | null;
  right: Node | null;
  parent: Node | null;

  constructor(
    val?: number,
    left?: Node | null,
    right?: Node | null,
    parent?: Node | null,
  ) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
    this.parent = parent === undefined ? null : parent;
  }
}

// [15, 6, 18, 3, 7, 17, 20, 2, 4, null, 13, null, null, null, null, null, null, null, null, 9];
//
//          15
//        /    \
//       6      18
//      / \    /  \
//     3   7  17  20
//    / \   \
//   2   4  13
//         /
//        9

class TreeFactory {
  /**
   * Строит дерево из массива LeetCode и возвращает:
   * 1. root - корень всего дерева
   * 2. nodesMap - Map, где ключ — это значение Node.val, а значение — сам объект Node.
   *    Это нужно, чтобы вы могли легко достать и передать в тест любой узел по его числу.
   */
  static createTree(arr: (number | null)[]): {
    root: Node | null;
    nodesMap: Map<number, Node>;
  } {
    if (arr.length === 0 || arr[0] === null) {
      return { root: null, nodesMap: new Map() };
    }

    const nodesMap = new Map<number, Node>();

    // Создаем корень
    const root = new Node(arr[0]);
    nodesMap.set(root.val, root);

    // Очередь для BFS хранит узлы, чьих детей мы сейчас будем искать
    const queue: Node[] = [root];
    let i = 1; // Указатель на текущий элемент в массиве arr

    while (queue.length > 0 && i < arr.length) {
      const current = queue.shift()!;

      // 1. Обрабатываем левого ребенка
      if (i < arr.length && arr[i] !== null) {
        const leftVal = arr[i]!;
        const leftNode = new Node(leftVal);

        current.left = leftNode; // Связь: родитель -> левый
        leftNode.parent = current; //  связь левый -> родитель

        nodesMap.set(leftVal, leftNode);
        queue.push(leftNode);
      }
      i++;

      // 2. Обрабатываем правого ребенка
      if (i < arr.length && arr[i] !== null) {
        const rightVal = arr[i]!;
        const rightNode = new Node(rightVal);

        current.right = rightNode; // Связь: родитель -> правый
        rightNode.parent = current; // связь правый -> родитель

        nodesMap.set(rightVal, rightNode);
        queue.push(rightNode);
      }
      i++;
    }

    return { root, nodesMap };
  }
}

function inorderSuccessor(node: Node | null): Node | null {
  if (!node) return null;

  const val = node.val;


  function findDiff(node: Node | null, prev: number) {
    if (!node) return null;

    if (!node.right) return node.parent;

    return node;
  }

  return findDiff(node, Infinity);
}

// 1. Данные из Примера 3 на LeetCode
const arrayRepresentation = [50, 25, 75, 12, 35, 60, 85, null, null, 30, 40, null, null, null, null, 28, null, null, null, 29];

// 2. Генерируем дерево в памяти со всеми parent-ссылками
const { root, nodesMap } = TreeFactory.createTree(arrayRepresentation);

console.log(root);

// 3. Достаем из нашей карты узел, который хотим передать на вход функции
// Например, по условию Примера 5, нам нужно найти следующий для узла со значением 9
const nodeToTest = nodesMap.get(29);

if (nodeToTest) {
  // 4. Вызываем  функцию
  const nextNode = inorderSuccessor(nodeToTest);

  // 5. Проверяем результат
  console.log(`Для узла 29 следующий узел: ${nextNode ? nextNode.val : "null"}`);
  // Ожидаемый вывод: Для узла 29 следующий узел: 30
} else {
  console.log("Узел не найден в дереве!");
}
