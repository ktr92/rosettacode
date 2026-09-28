// Определение узла бинарного дерева
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

// Сигнатура целевой функции
function isSubtree(t1: TreeNode | null, t2: TreeNode | null): boolean {
 
 function treeString(node: TreeNode | null, treeArr: Array<string | number>) {
  // конец ветки
  if (node === null) {
   treeArr.push('N');
   return;
  }

  treeArr.push('#' + node.val)
  treeString(node.left, treeArr)
  treeString(node.right, treeArr)
 }

 const result1: Array<string | number> = [];
 treeString(t1, result1);
 const result2: Array<string | number> = [];
 treeString(t2, result2);
 return result1.join().includes(result2.join())
}

/* function isSubtree(t1: TreeNode | null, t2: TreeNode | null): boolean {
  // найти корень t2 в t1
  function findRoot(t1: TreeNode | null, t2: TreeNode | null): boolean {
    if (t1 === null) {
      return false;
    }
    if (t1?.val == t2?.val) {
     if (checkTree(t1, t2)) {
      return true
     }
    }
    const left = findRoot(t1.left, t2);
    const right = findRoot(t1.right, t2);

    return left || right;
  }

  function checkTree(t1: TreeNode | null, t2: TreeNode | null): boolean {
    if (t1 === null && t2 === null) {
      return true;
    }
    if (t1?.val !== t2?.val) {
      return false;
    }

    const left = checkTree(t1.left, t2.left);
    const right = checkTree(t1.right, t2.right);

    return left && right;
  }

  return findRoot(t1, t2);
} */

/**
 *        T1 (Большое дерево)               T2 (Поддерево)
              3                                 4
             / \                               / \
            4   5                             1   2
           / \
          1   2

 */

const t1_1 = new TreeNode(
  3,
  new TreeNode(4, new TreeNode(1), new TreeNode(2)),
  new TreeNode(5),
);

const t2_1 = new TreeNode(4, new TreeNode(1), new TreeNode(2));

console.log("Тест 1 (Ожидается true):", isSubtree(t1_1, t2_1));

/**
 *        T1 (Большое дерево)               T2 (Поддерево)
              3                                 4
             / \                               / \
            4   5                             1   2
           / \
          1   2
             /
            0

 */

const t1_2 = new TreeNode(
  3,
  new TreeNode(4, new TreeNode(1), new TreeNode(2, new TreeNode(0), null)),
  new TreeNode(5),
);

const t2_2 = new TreeNode(4, new TreeNode(1), new TreeNode(2));

console.log("Тест 2 (Ожидается false):", isSubtree(t1_2, t2_2));

/**
 *        T1 (Большое дерево)               T2 (Поддерево)
              1                                 1
             / \                               / \
            2   3                             2   3

 */

const t1_3 = new TreeNode(1, new TreeNode(2), new TreeNode(3));
const t2_3 = new TreeNode(1, new TreeNode(2), new TreeNode(3));

console.log("Тест 3 (Ожидается true):", isSubtree(t1_3, t2_3));

/**
 *          T1 (Большое дерево)               T2 (Поддерево)
                3                                 4
               / \                               / \
              4   5                             1   2
             /
            4
           / \
          1   2

 */

const t1_4 = new TreeNode(
  3,
  new TreeNode(4, new TreeNode(4, new TreeNode(1), new TreeNode(2)), null),
  new TreeNode(5),
);

const t2_4 = new TreeNode(4, new TreeNode(1), new TreeNode(2));

console.log("Тест 4 (Ожидается true):", isSubtree(t1_4, t2_4));
