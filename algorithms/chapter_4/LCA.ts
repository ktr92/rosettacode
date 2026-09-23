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
export function lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {

 function findNode(node: TreeNode, value: number) {
  if (node?.value === value) {
   return node
  } 
  if (node?.leftNode) {
   return findNode(node.leftNode, value)
  }
  if (node?.rightNode) {
   return findNode(node.rightNode, value)
  }
  return null
 }

 const nodeP = findNode(root!, p!.value)

 return nodeP;
}

const arrayRepresentation = [3, 5, 1, 6, 2, 0, 8, null, null, 7, 4];
const p = new BinaryTreeNode(3);
const q = new BinaryTreeNode(7);
const root = TreeFactory.createTree(arrayRepresentation);
const result = lowestCommonAncestor(root, p, q);

console.log(root)
console.log(result)
