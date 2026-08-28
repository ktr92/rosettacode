import { ITreeNode } from "./types/tree.type";

/**
 * Узел бинарного дерева с двумя дочерними узлами и методом getValue().
 * Реализация соответствует интерфейсу ITreeNode<T>.
 */
class TreeNode<T> implements ITreeNode<T> {
  public value: T;
  public parent: TreeNode<T> | null;
  public children: TreeNode<T>[];

  /**
   * @param value Значение узла.
   * @param parent Родительский узел. По умолчанию null.
   * @param children Начальные дочерние узлы. По умолчанию пустой массив.
   */
  constructor(value: T, parent?: TreeNode<T> | null, children?: TreeNode<T>[]) {
    this.value = value;
    this.parent = parent ?? null;
    // копируем массив, чтобы внешний код не мог напрямую менять внутренний массив
    this.children = [...(children ?? [])];
    // если у переданных детей есть свои родители, меняем их на текущий узел
    for (const child of this.children) {
      child.parent = this;
    }
  }

  /**
   * Возвращает текущее значение узла.
   * @returns Значение узла типа T.
   */
  public getValue(): T {
    return this.value;
  }

  /**
   * Добавляет дочерний узел к текущему узлу.
   * При невозможности добавить (у узла уже есть 2 детей) — выводит сообщение об ошибке.
   * @param node Узел-ребёнок для добавления.
   */
  public addChild(node: TreeNode<T>) {
    if (node instanceof TreeNode) {
      // если узел уже имеет другого родителя, открепим его от него
      if (node.parent) {
        node.parent.removeChild(node);
      }
      this.children.push(node);
      node.parent = this;
    }
  }

  /**
   * Удаляет указанного потомка из текущего узла.
   * @param node Узел-потомок, который нужно удалить.
   * @returns Удалённый узел или null, если узел не найден.
   */
  public removeChild(node: TreeNode<T>): TreeNode<T> | null {
    const childIndex = this.children.indexOf(node);
    if (childIndex === -1) return null;
    node.parent = null;
    return this.children.splice(childIndex, 1)[0] as TreeNode<T>;
  }
}

export default TreeNode;