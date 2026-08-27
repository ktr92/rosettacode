import Tree from "./Tree";
import TreeNode from "./TreeNode";
import BinaryTreeNode from "./BinaryTreeNode";

// требуем метод для получения значения
export interface NodeValue<T> {
  getValue(): T;
}
type nodeType<T> =
  | (TreeNode<T> & NodeValue<T>)
  | (BinaryTreeNode<T> & NodeValue<T>);

function isTreeNode<T>(node: nodeType<T>): node is TreeNode<T> {
  return node instanceof TreeNode;
}
function isBinaryTreeNode<T>(node: nodeType<T>): node is BinaryTreeNode<T> {
  return node instanceof BinaryTreeNode;
}

function traverseTree<T>(tree: Tree<T>): T[] {
  const result: T[] = [];

  if (tree.isEmpty()) {
    return result;
  } else {
    const node = tree.root as nodeType<T>;
    const queue: nodeType<T>[] = [node];

    while (queue.length > 0) {
      if (queue[0] && isTreeNode(queue[0])) {
        const treeNode = queue[0] as TreeNode<T>;
        if (treeNode.children.length) {
          queue.push(...treeNode.children);
        }
        result.push(treeNode.getValue());
        queue.shift();
      } else if (queue[0] && isBinaryTreeNode(queue[0])) {
        const treeNode = queue[0] as BinaryTreeNode<T>;
        if (treeNode.leftNode) {
          queue.push(treeNode.leftNode);
        }
        if (treeNode.rightNode) {
          queue.push(treeNode.rightNode);
        }
        result.push(treeNode.getValue());
        queue.shift();
      } else {
        return []
      }
    }
  }

  return result;
}

export default traverseTree;
/* 
const root = new BinaryTreeNode<number>(10);
const tree = new Tree<number>(root);
const child1 = new BinaryTreeNode<number>(5);
const child2 = new BinaryTreeNode<number>(4);
const child1_1 = new BinaryTreeNode<number>(2);
const child1_2 = new BinaryTreeNode<number>(3);
const child2_1 = new BinaryTreeNode<number>(1);
const child2_2 = new BinaryTreeNode<number>(0);

(tree.root as BinaryTreeNode<number>).addChild(child1);
(tree.root as BinaryTreeNode<number>).addChild(child2);
(child1 as BinaryTreeNode<number>).addChild(child1_1);
(child1 as BinaryTreeNode<number>).addChild(child1_2);
(child2 as BinaryTreeNode<number>).addChild(child2_1);
(child2 as BinaryTreeNode<number>).addChild(child2_2);

console.log(traverseTree(tree)) */
