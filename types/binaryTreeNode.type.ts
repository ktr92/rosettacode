/**
 * Базовый интерфейс узла бинарного дерева (не обязательно BST).
 * Узел имеет значение и связи на родителей и детей.
 */
export interface IBinaryTreeNode<T> {
  value: T;
  parent: IBinaryTreeNode<T> | null;
  leftNode: IBinaryTreeNode<T> | null;
  rightNode: IBinaryTreeNode<T> | null;

  /**
   * Возвращает значение узла.
   * @returns Значение типа T.
   */
  getValue(): T;

  /**
   * Добавляет потомка к текущему узлу.
   * Максимум две связи: левый и правый дети.
   * @param node Узел-потомок, который нужно добавить.
   */
  addChild(node: IBinaryTreeNode<T>): void;

  /**
   * Удаляет переданного узла-потомка из текущего узла.
   * Может вернуть удалённый узел или null, если узел не найден.
   * @param node Узел-потомок, которого нужно удалить.
   * @returns Удалённый узел или null.
   */
  removeChild(node: IBinaryTreeNode<T>): IBinaryTreeNode<T> | null;
}

/**
 * Интерфейс общего узла дерева, который умеет возвращать значение.
 * Реализуется узлами TreeNode и BinaryTreeNode через объединение типов.
 */
export interface NodeValue<T> {
  getValue(): T;
}