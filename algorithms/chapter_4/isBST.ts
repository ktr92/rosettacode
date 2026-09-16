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

function isValidBST(root: TreeNode | null): boolean {

  function checkNode(node: TreeNode | null, max: number | null, min: number | null): boolean {
    if (node === null) return true;
   
    if ((max !== null && node.val >= max) || (min !== null && node.val <= min)) return false;


    if (!checkNode(node.left, node.val,  min, ) || !checkNode(node.right, max, node.val)) {
     return false
    }

    return true;
  }

  return checkNode(root, null, null);
}

const root = new TreeNode(
  2,
  new TreeNode(1, null, null),
  new TreeNode(3, null, null),
);
const root3 = new TreeNode(
  2,
  new TreeNode(2, null, null),
  new TreeNode(2, null, null),
);
const root2 = new TreeNode(
  5,
  new TreeNode(1, null, null),
  new TreeNode(4, new TreeNode(3, null, null), new TreeNode(6, null, null)),
);
const root4 = new TreeNode(
  5,
  new TreeNode(4, null, null),
  new TreeNode(6, new TreeNode(3, null, null), new TreeNode(7, null, null)),
);

console.log(isValidBST(root));
console.log(isValidBST(root2));
console.log(isValidBST(root3));
console.log(isValidBST(root4));
