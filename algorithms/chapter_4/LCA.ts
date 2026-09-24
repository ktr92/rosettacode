/**
 * Given a binary tree, find the lowest common ancestor (LCA) of two given nodes in the tree.

According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes p and q as the lowest node in T that has both p and q as descendants (where we allow a node to be a descendant of itself).”

Input: root = [3,5,1,6,2,0,8,null,null,7,4], p = 6, q = 0
Output: 3

               [ 3 ] 
              /     \
           [ 5 ]     [ 1 ]  <-- Корень дерева (LCA для 6 и 7)
           /   \     /   \
         [6]   [2]  [0]  [8]
              /  \       
            [7]  [4]     
 */

import { BinaryTreeNode, TreeFactory } from "../../structures/BTFactory";

type TreeNode = BinaryTreeNode<number>;
export function lowestCommonAncestor(
  root: TreeNode | null,
  p: TreeNode | null,
  q: TreeNode | null,
): TreeNode | null {
  // DFS - ищем элемент, если нашли, то пробрасываем вверх
  // если тупик, то элемента нет в этой ветке, возращаем null
  if (root === null) return null;

  // если элемент найден, то возвращаем его. 
  // обход этой ветки завершен, и найденный узел ждет второго на этом уровне рекурсии
  if (root === p || root === q) {
    return root
  }

  // ожидаем что сюда вернется либо узел p либо q, одновременно быть не может,
  // т.к. мы идем по разным путям, а элементы все уникальные.  
  const left = lowestCommonAncestor(root.leftNode, p, q);
  const right = lowestCommonAncestor(root.rightNode, p, q);
  
  // если оба пути вернут значения, значит текущий узел (из которого вызвали) - и есть общий ancestor;
  if (left !== null && right !== null) {
    return root
  }

  // возвращаем наверх тот который не null
  return left !== null ? left : right;

}

// Вспомогательная функция для поиска ссылки на узел по его значению
function findNodeByValue(root: TreeNode | null, val: number): TreeNode | null {
  if (root === null) return null;
  if (root.value === val) return root;
  
  const leftSearch = findNodeByValue(root.leftNode, val);
  if (leftSearch !== null) return leftSearch;
  
  return findNodeByValue(root.rightNode, val);
}

const arrayRepresentation = [3, 5, 1, 6, 2, 0, 8, null, null, 7, 4];

const root = TreeFactory.createTree(arrayRepresentation);

const p = findNodeByValue(root, 6);
const q = findNodeByValue(root, 7);
const result = lowestCommonAncestor(root, p, q);

console.log(result);
