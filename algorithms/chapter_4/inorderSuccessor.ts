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
  static createTree(arr: Array<number | null>) {

   const root = new Node(arr[0] as number);
   const nodesMap = new Map<number, Node>();

   let left = null;
   let right = null;
   let node = root;

   while (arr.length) {
     node.left = new Node(arr.shift()!);
     node.right = new Node(arr.shift()!);

     node.left.left = new Node(arr.shift()!);
     node.left.right = new Node(arr.shift()!);

     node.right.left = new Node(arr.shift() as number);
     node.right.right = new Node(arr.shift() as number);

     node.left.left.left = new Node(arr.shift() as number);
     node.left.left.right = new Node(arr.shift() as number);
     
   }

   return {
    root, nodesMap
   }
   
  }
}

function inorderSuccessor(node: Node | null): Node | null {
  if (!node) return null;

  const val = node.val;

  if (node.parent && node.parent.val > val) {
    if (!node.right) return node.parent;
  }

  if (node.parent && node.parent.val < val) {
    if (!node.right) return null;
  }

  function findDiff(node: Node | null, prev: number) {
    if (!node) return null;

    if (!node.right) return node.parent;


    return node;
  }

  return findDiff(node, Infinity);
}

// 1. Данные из Примера 3 на LeetCode
const arrayRepresentation = [15, 6, 18, 3, 7, 17, 20, 2, 4, null, 13, null, null, null, null, null, null, null, null, 9];

// 2. Генерируем дерево в памяти со всеми parent-ссылками
const { root, nodesMap } = TreeFactory.createTree(arrayRepresentation);

console.log(root)

// 3. Достаем из нашей карты узел, который хотим передать на вход функции
// Например, по условию Примера 5, нам нужно найти следующий для узла со значением 9
const nodeToTest = nodesMap.get(9); 

if (nodeToTest) {
    // 4. Вызываем  функцию 
    const nextNode = inorderSuccessor(nodeToTest);
    
    // 5. Проверяем результат
    console.log(`Для узла 9 следующий узел: ${nextNode ? nextNode.val : "null"}`);
    // Ожидаемый вывод: Для узла 9 следующий узел: 13
} else {
    console.log("Узел не найден в дереве!");
}
