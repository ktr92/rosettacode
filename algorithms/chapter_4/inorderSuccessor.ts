import { Node, TreeFactory } from "../../structures/TreeFactory";


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
const arrayRepresentation = [
  50,
  25,
  75,
  12,
  35,
  60,
  85,
  null,
  null,
  30,
  40,
  null,
  null,
  null,
  null,
  28,
  null,
  null,
  null,
  29,
];

// 2. Генерируем дерево в памяти со всеми parent-ссылками
const { root, nodesMap } = TreeFactory.createTree(arrayRepresentation, true);

// 3. Достаем из нашей карты узел, который хотим передать на вход функции
// Например, по условию Примера 5, нам нужно найти следующий для узла со значением 9
const nodeToTest = nodesMap.get(29);
console.log(nodeToTest);

if (nodeToTest) {
  // 4. Вызываем  функцию
  const nextNode = inorderSuccessor(nodeToTest);

  // 5. Проверяем результат
  console.log(`Для узла 29 следующий узел: ${nextNode ? nextNode.val : "null"}`);
  // Ожидаемый вывод: Для узла 29 следующий узел: 30
} else {
  console.log("Узел не найден в дереве!");
}
