import { Node, TreeFactory } from "../../structures/TreeFactory";

function inorderSuccessor(node: Node | null): Node | null {
  if (!node) return null;

  function goRightLeft(node: Node) {
    let current = node.right;

    while (current && current.left) {
      current = current.left;
    }

    return current;
  }

  function goParent(node: Node) {
    let current = node.parent;
    let prev = node;
    while (current && current.left !== prev) {
      prev = current;
      current = current.parent;
    }
    return current;
  }

  if (node.right !== null) {
    return goRightLeft(node);
  } else {
    return goParent(node);
  }
}
/*
                50
             /    \
           25      75
          /  \    /  \
        12   35  60  85
            /  \
          30    40
         /
       28
         \
          29
*/
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
  console.log(
    `Для узла ${nodeToTest.val} следующий узел: ${nextNode ? nextNode.val : "null"}`,
  );
  // Ожидаемый вывод: Для узла 29 следующий узел: 30
} else {
  console.log("Узел не найден в дереве!");
}

const nodeToTest1 = nodesMap.get(25);

if (nodeToTest1) {
  const nextNode = inorderSuccessor(nodeToTest1);
  console.log(
    `Тест 1: Для узла ${nodeToTest1.val} следующий узел: ${nextNode ? nextNode.val : "null"}`,
  );
  // Ожидаемый вывод: Для узла 25 следующий узел: 28
}

const nodeToTest2 = nodesMap.get(85);

if (nodeToTest2) {
  const nextNode = inorderSuccessor(nodeToTest2);
  console.log(
    `Тест 2: Для узла ${nodeToTest2.val} следующий узел: ${nextNode ? nextNode.val : "null"}`,
  );
  // Ожидаемый вывод: Для узла 85 следующий узел: null
}

const nodeToTest3 = nodesMap.get(12);

if (nodeToTest3) {
  const nextNode = inorderSuccessor(nodeToTest3);
  console.log(
    `Тест 3: Для узла ${nodeToTest3.val} следующий узел: ${nextNode ? nextNode.val : "null"}`,
  );
  // Ожидаемый вывод: Для узла 12 следующий узел: 25
}

const nodeToTest4 = nodesMap.get(40);

if (nodeToTest4) {
  const nextNode = inorderSuccessor(nodeToTest4);
  console.log(
    `Тест 4: Для узла ${nodeToTest4.val} следующий узел: ${nextNode ? nextNode.val : "null"}`,
  );
  // Ожидаемый вывод: Для узла 40 следующий узел: 50
}
