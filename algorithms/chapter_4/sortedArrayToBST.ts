export class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

export function sortedArrayToBST(nums: number[]): TreeNode | null {
 let left = 0;
 let right = nums.length - 1;

 if (!nums.length) return null;
 if (left > right) return null

 const mid = Math.floor((left + right) / 2);
 const root = new TreeNode(mid, null, null);

 return root
}
