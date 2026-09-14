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
  const list = new ListNode(root.val);
  list.next = null;

  const list2 = new ListNode(root.left.val);
  list2.next = new ListNode(root.right.val);
  list2.next.next = null;

  const queue: TreeNode[] = [];
  queue.push(root);
  const visited = new Set();
  const result = [new ListNode(root.val)];

  while (queue.length) {
    const item = queue.shift();

    let node = null;
    if (item?.left) {
      node = new ListNode(item?.left?.val || null);
      node.next = new ListNode(item?.right?.val || null);

      queue.push(item.left)
      queue.push(item.right)
    } else {
      if (item?.right) {
        node = new ListNode(null)
        node.next = new ListNode(item?.right?.val || null);
        queue.push(item.right)
      }
    }

    if (node) result.push(node);
  }

  console.log(result);
  return result;
}
