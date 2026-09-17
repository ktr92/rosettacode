export class Node {
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
    this.val = val ?? 0;
    this.left = left ?? null;
    this.right = right ?? null;
    this.parent = parent ?? null;
  }
}

export class TreeFactory {
  /**
   * Строит дерево из массива LeetCode.
   * ВНИМАНИЕ: Если в дереве есть дубликаты val, nodesMap вернет последний обработанный узел.
   */
  static createTree(
    arr: (number | null)[],
    parentLink: boolean = false,
  ): { root: Node | null; nodesMap: Map<number, Node> } {
    if (arr.length === 0 || arr[0] === null) {
      return { root: null, nodesMap: new Map() };
    }

    const nodesMap = new Map<number, Node>();
    const root = new Node(arr[0]);
    nodesMap.set(root.val, root);
    
    const queue: Node[] = [root];
    let p = 1;

    while (queue.length > 0 && p < arr.length) {
      const current = queue.shift()!;

      // Левый ребенок
      if (p < arr.length) {
        const leftVal = arr[p];
        if (leftVal !== null && leftVal !== undefined) {
          current.left = new Node(leftVal);
          if (parentLink) current.left.parent = current;
          queue.push(current.left);
          nodesMap.set(leftVal, current.left);
        }
        p++;
      }

      // Правый ребенок
      if (p < arr.length) {
        const rightVal = arr[p];
        if (rightVal !== null && rightVal !== undefined) {
          current.right = new Node(rightVal);
          if (parentLink) current.right.parent = current;
          queue.push(current.right);
          nodesMap.set(rightVal, current.right);
        }
        p++;
      }
    }

    return { root, nodesMap };
  }
}
