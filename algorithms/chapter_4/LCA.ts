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
  function findParents(target: TreeNode) {
    const parents: number[] = [];

    function findNode(node: TreeNode, value: number, parents: number[]) {
      if (node.value === value) {
        return;
      }

      if (node.leftNode === null && node.rightNode === null) {
        return;
      }

      parents.push(node.value);
      if (node?.rightNode) {
        findNode(node.rightNode, value, parents);
      }
      if (node?.leftNode) {
        findNode(node.leftNode, value, parents);
      }
      return parents;
    }
    findNode(root!, target!.value, parents);
    return parents;
  }

  const pParents = findParents(p);
  const qParents = findParents(q);

  console.log(pParents, qParents);

  return root;
}

const arrayRepresentation = [3, 5, 1, 6, 2, 0, 8, null, null, 7, 4];
const p = new BinaryTreeNode(6);
const q = new BinaryTreeNode(7);
const root = TreeFactory.createTree(arrayRepresentation);
const result = lowestCommonAncestor(root, p, q);

console.log(result);
