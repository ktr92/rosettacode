/**
 * Универсальный узел дерева, который может быть либо TreeNode<T>, либо BinaryTreeNode<T>.
 * Такой подход позволяет работать с разными реализациями узлов под единым деревом.
 *
 * В дальнейшем можно расширить до общего интерфейса, если нужно добавить дополнительные
 * поля (например, флаги видимости, метаданные и т.д.).
 *
 * @template T Тип значения, хранимого в узле.
 */
import TreeNode from '../TreeNode';
import BinaryTreeNode from '../BinaryTreeNode';

export type UniversalTreeNode<T> = TreeNode<T> | BinaryTreeNode<T>;

/**
 * Обобщённый интерфейс дерева, использующего универсальный узел.
 * Реализация может хранить корень любого узла и поддерживать базовые проверки
 * на пустоту.
 *
 * @template T Тип значения.
 */
export interface ITree<T> {
  /** Корневой узел дерева или null, если дерево пустое. */
  root: UniversalTreeNode<T> | null;

  /**
   * Является ли дерево пустым (нет узлов).
   * @returns true, если дерево пустое; иначе false.
   */
  isEmpty(): boolean;
}

/**
 * Базовый интерфейс для узла бинарного дерева с двумя дочерними узлами.
 * Этот интерфейс описывает минимальный контракт, который требуют
 * TreeNode<T> и BinaryTreeNode<T>.
 *
 * @template T Тип значения узла.
 */
export interface ITreeNode<T> {
  value: T;
  parent: TreeNode<T> | null;
  children: TreeNode<T>[];

  /**
   * Возвращает значение узла.
   * @returns Значение типа T.
   */
  getValue(): T;

  /**
   * Добавляет дочернего узла к текущему узлу.
   * Узел автоматически становится дочерним текущего и обновляется его parent.
   *
   * Обратите внимание: если переданный узел уже имеет родителя, он будет откреплён
   * от старого родителя перед добавлением к текущему.
   * @param node Узел-потомок для добавления.
   */
  addChild(node: ITreeNode<T>): void;

  /**
   * Удаляет указанного потомка из текущего узла.
   * Возвращает удалённый узел или null, если такой дочерний не найден.
   * @param node Узел-потомок, который нужно удалить.
   * @returns Удалённый узел или null.
   */
  removeChild(node: ITreeNode<T>): ITreeNode<T> | null;
}

/**
 * Универсальный интерфейс для узла дерева, который может возвращать значение через getValue().
 */
export interface NodeValue<T> {
  getValue(): T;
}

/**
 * Обобщённый тип узла, который может быть TreeNode<T> или BinaryTreeNode<T>,
 * и который реализует NodeValue<T>.
 */

type nodeType<T> = (TreeNode<T> & NodeValue<T>) | (BinaryTreeNode<T> & NodeValue<T>);

/**
 * Тип-guard: принадлежит ли узел TreeNode.
 */
export function isTreeNode<T>(node: nodeType<T>): node is TreeNode<T> {
  return (node as any) instanceof TreeNode;
}

/**
 * Тип-guard: принадлежит ли узел BinaryTreeNode.
 */
export function isBinaryTreeNode<T>(node: nodeType<T>): node is BinaryTreeNode<T> {
  return (node as any) instanceof BinaryTreeNode;
}