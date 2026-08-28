// binarySearchNode.ts

import { IBinarySearchNode } from './types/binarySearchTree.type';

/**
 * Узел бинарного дерева для BST.
 * Реализует интерфейс IBinarySearchNode и поддерживает базовые операции вставки
 * и удаления дочерних узлов.
 *
 * Примечание: в этой реализации дубликаты идут в правое поддерево
 * (поскольку условие выбора стороны — newNode.getValue() < this.getValue()).
 */
class BinarySearchNode<T> implements IBinarySearchNode<T> {
  public parent: BinarySearchNode<T> | null = null;
  public leftNode: BinarySearchNode<T> | null = null;
  public rightNode: BinarySearchNode<T> | null = null;

  constructor(public value: T) {}

  /**
   * Возвращает значение узла.
   * @returns Значение узла типа T.
   */
  public getValue(): T {
    return this.value;
  }

  /**
   * Вставляет узел внутри дерева, начиная с этого узла.
   * Рекурсивно опускается по дереву до пустого места и вставляет узел.
   * Если значение вставляемого узла меньше текущего — идём в левое поддерево,
   * иначе — в правое поддерево.
   * @param newNode Узел, который нужно вставить.
   */
  public insert(newNode: BinarySearchNode<T>) {
    if (newNode instanceof BinarySearchNode) {
      if (newNode.getValue() < this.getValue()) {
        if (!this.leftNode) {
          this.leftNode = newNode;
          newNode.parent = this;
        } else {
          this.leftNode.insert(newNode);
        }
      } else {
        if (!this.rightNode) {
          this.rightNode = newNode;
          newNode.parent = this;
        } else {
          this.rightNode.insert(newNode);
        }
      }
    }
  }

  /**
   * Удаляет дочерний узел у этого узла.
   * Успешно удаляется левый или правый потомок. При удалении родитель
   * удаляемого узла устанавливается в null и ссылка в текущем узле обнуляется.
   * @param node Узел, который нужно удалить из дочерних.
   * @returns Удалённый узел или null, если узел не найден среди потомков.
   */
  public removeChild(node: BinarySearchNode<T>): BinarySearchNode<T> | null {
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

export { BinarySearchNode }; 