/**
 * Для бинарного дерева разработайте алгоритм, который создает связный
список всех узлов, находящихся на каждой глубине (для дерева с глубиной
О должно получиться О связных списков).
 */
/*
 *  пример:
 *         5
 *       /   \
 *      3     8
 *     / \     \
 *    1   4     9
 */

export class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(
    val: number,
    left: TreeNode | null = null,
    right: TreeNode | null = null,
  ) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class ListNode {
  val: number;
  next: ListNode | null = null;
  constructor(val: number) {
    this.val = val;
  }
}

export function listOfDepths(root: TreeNode): ListNode[] {
 
  const queue: Array<TreeNode | null> = [];
  queue.push(root);
  const result = [];

  let level = 1;

  while (queue.length) {
    if (queue.length === level) {
      const first = queue[0];
      const head = new ListNode(first?.val);
      let node = head;
      for (let i = 1; i < level; i++) {
        const next = queue[i];
        if (next) {
          node.next = new ListNode(next?.val);
          node = node.next;
        } else {
          node.next = null;
        }
      }

      level = level * 2;
      if (node) result.push(head);
    }

    const item = queue.shift();
    queue.push(item?.left || null);
    queue.push(item?.right || null);
  }

  return result;
}
