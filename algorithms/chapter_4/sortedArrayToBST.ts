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

  const next = (start: number, end: number) => {
    if (start > end) return null;

    const mid = Math.floor((start + end) / 2);
    const root = new TreeNode(nums[mid], null, null);

    root.left = next(start, mid - 1)
    root.right = next(mid + 1, end)
    return root
}

  return next(0, nums.length - 1);
}
