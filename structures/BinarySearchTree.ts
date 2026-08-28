 // binarySearchTree.ts

import { BinarySearchNode } from './BinarySearchNode';
import { IBinarySearchTree } from './types/binarySearchTree.type';

/**
 * Простое бинарное дерево поиска (BST).
 * Поддерживает вставку значений через метод insert(value).
 *
 * @template T Тип значения, хранимого в дереве.
 */
export class BinarySearchTree<T> implements IBinarySearchTree<T> {
  public root: BinarySearchNode<T> | null = null;

  constructor() {}

  /**
   * Вставляет значение в дерево.
   * Если дерево пустое — создаётся корень. Иначе вызывается вставка
   * из корневого узла.
   * @param value Значение, которое нужно вставить в BST.
   */
  insert(value: T): void {
    const newNode = new BinarySearchNode<T>(value);
    if (!this.root) {
      this.root = newNode;
      this.root.parent = null;
    } else {
      this.root.insert(newNode);
    }
  }
}