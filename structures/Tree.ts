import TreeNode from "./TreeNode";
import BinaryTreeNode from "./BinaryTreeNode";
import { UniversalTreeNode } from "./types/tree.type"

/**
 * Простое дерево, которое может содержать любой узел: TreeNode<T> или BinaryTreeNode<T>.
 * Предназначено для гибкой работы с разными типами узлов в рамках одного контейнера.
 *
 * Основные концепции:
 * - root может быть null (пустое дерево).
 * - DOM-подобная операция isEmpty() для проверки наличия элементов.
 *
 * @template T Тип значения, хранимого в узлах дерева.
 */
class Tree<T> {
  /** Корневой узел дерева или null, если дерево пустое. */
  public root: UniversalTreeNode<T> | null;

  /**
   * Создаёт дерево с указанным корневым узлом.
   * Если root не передан, создаётся пустое дерево.
   *
   * @param root Опциональный корневой узел дерева. Может быть TreeNode<T> или BinaryTreeNode<T>.
   */
  constructor(root: UniversalTreeNode<T> | null = null) {
    this.root = root;
  }

  /**
   * Проверка, пусто ли дерево.
   *
   * Логика: дерево пустое, если корень равен null.
   *
   * Внедряет простую гарантию инвариантов для внешних пользователей:
   * после любых изменений root он должен соответствовать isEmpty().
   *
   * @returns true если дерево пустое, иначе false.
   */
  public isEmpty(): boolean {
    return this.root === null;
  }
}

export default Tree;