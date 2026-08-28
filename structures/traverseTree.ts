import Tree from "./Tree";
import TreeNode from "./TreeNode";
import BinaryTreeNode from "./BinaryTreeNode";
import { NodeValue, isTreeNode, isBinaryTreeNode } from "./types/tree.type"

/**
 * Обход дерева в ширину (BFS) с совместимым поведением для TreeNode и BinaryTreeNode.
 *
 * Результат возвращается как массив значений узлов в порядке обхода.
 *
 * @template T Тип значения.
 * @param tree Дерево, которое нужно обойти.
 * @returns Массив значений узлов в порядке обхода (BFS).
 */
function traverseTree<T>(tree: Tree<T>): T[] {
  const result: T[] = [];

  if (tree.isEmpty()) {
    return result;
  } else {
    // Узел может быть TreeNode или BinaryTreeNode, но реализуют getValue()
    // и имеют соответствующие поля/методы для обхода.
    type nodeType<T> = TreeNode<T> & NodeValue<T> | BinaryTreeNode<T> & NodeValue<T>;
    const node = tree.root as nodeType<T>;
    const queue: nodeType<T>[] = [node];

    while (queue.length > 0) {
      if (queue[0] && isTreeNode(queue[0])) {
        const treeNode = queue[0] as TreeNode<T>;
        if ((treeNode as any).children?.length) {
          queue.push(...(treeNode as any).children);
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
        // неожиданный тип элемента, безопасный выход
        return [];
      }
    }
  }

  return result;
}

export default traverseTree