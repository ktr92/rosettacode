// breadthFirstSearch.ts (пример переработки вашего кода)

import Tree from './Tree';
import TreeNode from './TreeNode';
import BinaryTreeNode from './BinaryTreeNode';
import { NodeValue } from './types/binaryTreeNode.type'

/**
 * Узел, который может быть либо TreeNode, либо BinaryTreeNode и реализует NodeValue<T>.
 */
type nodeType<T> = TreeNode<T> & NodeValue<T> | BinaryTreeNode<T> & NodeValue<T>;

function isTreeNode<T>(node: nodeType<T>): node is TreeNode<T> {
  return (node as any) instanceof TreeNode;
}
function isBinaryTreeNode<T>(node: nodeType<T>): node is BinaryTreeNode<T> {
  return (node as any) instanceof BinaryTreeNode;
}

/**
 * Поиск узла в дереве в ширину (BFS).
 * Поддерживает деревья, где узел может реализовывать TreeNode API
 * или BinaryTreeNode API, через общий интерфейс NodeValue.
 *
 * @template T Тип значения в узле.
 * @param tree Дерево, над которым выполняется поиск.
 * @param target Значение, которое нужно найти в узле дерева.
 * @returns Узел, у которого getValue() === target, или null если узел не найден.
 */
function breadthFirstSearch<T>(tree: Tree<T>, target: T): nodeType<T> | null {
  if (tree.isEmpty()) return null;

  const node = tree.root as nodeType<T>;
  const queue: nodeType<T>[] = [node];

  while (queue.length > 0) {
    if (queue[0]?.getValue() === target) return queue[0];

    if (queue[0] && isTreeNode(queue[0])) {
      const treeNode = queue[0] as TreeNode<T>;
      if (treeNode.children.length) {
        queue.push(...treeNode.children);
      }
      queue.shift();

    } else if (queue[0] && isBinaryTreeNode(queue[0])) {
      const treeNode = queue[0] as BinaryTreeNode<T>;
      if (treeNode.leftNode) {
        queue.push(treeNode.leftNode);
      }
      if (treeNode.rightNode) {
        queue.push(treeNode.rightNode);
      }
      queue.shift();

    }
  }

  return null;
}

export default breadthFirstSearch;