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
    constructor(val: number, left: TreeNode | null = null, right: TreeNode | null = null) {
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
    const result = []

    let level = 1;
    while (queue.length) {
        const item = queue[0];
        
        if (item?.left) {
            queue.push(item.left)
        }
        if (item?.right) {
            queue.push(item.right)
        }

        let node = new ListNode(item?.val)
        for (let i = 0; i < level; i++) {
            node.next = new ListNode(queue.shift()?.val);
            node = node.next;
        }
        level++
        result.push(node)
    }

   
    console.log(result)

    return result
}

