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

function isBalanced(root: TreeNode | null): boolean {
  function postOrderTraversal (node: TreeNode | null) {
    if (node === null) return 0;

    const leftHeight: number = postOrderTraversal(node.left);
    if (leftHeight === -1) return -1;

    const rightHeight: number = postOrderTraversal(node.right);
    if (rightHeight === -1) return -1;

    if (Math.abs(leftHeight - rightHeight) > 1) return -1;

    return Math.max(leftHeight, rightHeight) + 1;
  };
 
  return postOrderTraversal(root) !== -1;
}

const root = new TreeNode(
  3,
  new TreeNode(9, null, null),
  new TreeNode(20, new TreeNode(15), new TreeNode(7)),
);
const root2 = new TreeNode(
  1,
  new TreeNode(
    2,
    new TreeNode(3, 
    new TreeNode(3, 
      new TreeNode(4, null, null), 
      new TreeNode(4, null, null),
    ), null),
    null,
  ),
  new TreeNode(2, null, null),
);

console.log(isBalanced(root));
console.log(isBalanced(root2));
