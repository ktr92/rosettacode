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
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
    this.parent = parent === undefined ? null : parent;
  }
}



export class TreeFactory {
  /**
   * Строит дерево из массива LeetCode и возвращает:
   * 1. root - корень всего дерева
   * 2. nodesMap - Map, где ключ — это значение Node.val, а значение — сам объект Node.
   *    Это нужно, чтобы достать и передать в тест любой узел по его числу.
   */

  
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

  static createTree(
    arr: (number | null)[],
    parentLink: boolean = false,
  ): {
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

    const nodes = [root];

    let p = 1;
    while (nodes.length && p < arr.length) {
      const current = nodes.shift()!;

      if (typeof arr[p] !== "undefined" && arr[p] !== null) {
        current.left = new Node(arr[p]);
        if (parentLink) current.left.parent = current;
        nodes.push(current.left);
        nodesMap.set(current.left.val, current);
      }
      p++;

      if (typeof arr[p] !== "undefined" && arr[p] !== null) {
        current.right = new Node(arr[p]);
        if (parentLink) current.right.parent = current;
        nodes.push(current.right);
        nodesMap.set(current.right.val, current);
      }
      p++;
    }

    return { root, nodesMap };
  }
}