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
  return true;
}

const root = new TreeNode(
  3,
  new TreeNode(9, null, null),
  new TreeNode(20, new TreeNode(15), new TreeNode(7)),
);

console.log(isBalanced(root));
