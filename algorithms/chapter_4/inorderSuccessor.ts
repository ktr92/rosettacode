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

function inorderSuccessor(node: Node | null): Node | null {
  const val = node?.val;

  function findDiff(node: Node | null, prevDiff: number) {
    if (!node) return null;

    if (node?.parent?.val > node?.val) {
      if (!node.right) return node.parent;
    }

    if (node?.parent?.val < node?.val) {
     if (!node.left) return node.right;
    }

    return node;
  }

  return findDiff(node, 0)
}

const root = new Node(2, new Node(1, null, null), new Node(3, null, null)); // node = 1 -> 2

const root4 = new Node(
  5,
  new Node(
    3,
    new Node(2, new Node(1, null, null), null),
    new Node(4, null, null),
  ),
  new Node(6),
); // node = 6 -> null

console.log(inorderSuccessor(root));
console.log(inorderSuccessor(root4));
