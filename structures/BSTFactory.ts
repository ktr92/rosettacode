export class Node {
  val: number;
  left: Node | null = null;
  right: Node | null = null;
  parent: Node | null = null;

  constructor(val: number) {
    this.val = val;
  }
}

export class TreeFactory {
  static createTree(arr: (number | null)[]): { root: Node | null; nodesMap: Map<number, Node> } {

    // для доступа по узлу
    const nodesMap = new Map<number, Node>();
    if (arr.length === 0 || arr[0] === null) return { root: null, nodesMap };

    const root = new Node(arr[0]);
    nodesMap.set(root.val, root);

    // Функция чистой BST-вставки с гарантированным сохранением parent-ссылок
    function insert(root: Node, val: number): Node {
      let current = root;
      while (true) {
        if (val < current.val) {
          if (current.left === null) {
            const newNode = new Node(val);
            newNode.parent = current;
            current.left = newNode;
            return newNode;
          }
          current = current.left;
        } else {
          if (current.right === null) {
            const newNode = new Node(val);
            newNode.parent = current;
            current.right = newNode;
            return newNode;
          }
          current = current.right;
        }
      }
    }

    // Вставляем все числовые значения строго по порядку
    for (let i = 1; i < arr.length; i++) {
      const val = arr[i];
      if (val !== null && val !== undefined) {
        const newNode = insert(root, val);
        nodesMap.set(val, newNode);
      }
    }

    return { root, nodesMap };
  }
}
