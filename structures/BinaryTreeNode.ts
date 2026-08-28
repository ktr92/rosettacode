// BinaryTreeNode.ts

import { IBinaryTreeNode } from './types/binaryTreeNode.type'

/**
 * Узел бинарного дерева с двумя дочерними узлами.
 * Поддерживает явное управление родителем и дочерними узлами.
 */
class BinaryTreeNode<T> implements IBinaryTreeNode<T> {
  public value: T;
  public parent: BinaryTreeNode<T> | null;
  public leftNode: BinaryTreeNode<T> | null;
  public rightNode: BinaryTreeNode<T> | null;

  /**
   * @param value Значение узла.
   * @param parent Родительский узел (если есть).
   * @param leftNode Левый дочерний узел (если есть).
   * @param rightNode Правый дочерний узел (если есть).
   */
  constructor(
    value: T,
    parent?: BinaryTreeNode<T> | null,
    leftNode?: BinaryTreeNode<T>,
    rightNode?: BinaryTreeNode<T>,
  ) {
    this.value = value;
    this.parent = parent ?? null;
    this.leftNode = leftNode ?? null;
    this.rightNode = rightNode ?? null;
    if (leftNode) {
      if (leftNode.parent) {
        leftNode.parent = this;
      }
    }
    if (rightNode) {
      this.rightNode = rightNode;
      if (rightNode.parent) {
        rightNode.parent = this;
      }
    }
  }

  public getValue(): T {
    return this.value;
  }

  /**
   * Добавляет узел-потомок к текущему узлу.
   * Если у узла уже есть два потомка — логируется ошибка.
   * Если переданный узел уже имеет родителя — он будет отсоединён и привязать к текущему.
   * @param node Узел-потомок, который нужно добавить.
   */
  public addChild(node: BinaryTreeNode<T>) {
    if (node instanceof BinaryTreeNode) {
      if (!this.leftNode || !this.rightNode) {
        if (node.parent) {
          node.parent.removeChild(node);
        }
        node.parent = this;
      }
      if (!this.leftNode) {
        this.leftNode = node;
      } else if (!this.rightNode) {
        this.rightNode = node;
      } else {
        console.error("The tree already has 2 children");
      }
    }
  }

  /**
   * Удаляет указанного узла-потомка из текущего.
   * При успешном удалении родитель удаляется, ссылка в текущем узле обнуляется.
   * @param node Узел-потомок, которого нужно удалить.
   * @returns Удалённый узел или null, если узел не найден.
   */
  public removeChild(node: BinaryTreeNode<T>): BinaryTreeNode<T> | null {
    if (node === this.leftNode) {
      node.parent = null;
      this.leftNode = null;
    } else if (node === this.rightNode) {
      node.parent = null;
      this.rightNode = null;
    } else {
      console.error("The node to be removed was not found");
      return null;
    }
    return node;
  }
}

export default BinaryTreeNode;