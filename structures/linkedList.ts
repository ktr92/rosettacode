import { Node, IDoublyLinkedList } from "./types/linkedList.type"

/**
 * Двусвязный список с операциями вставки в начало/конец и удаления из начала/конца.
 *
 * Реализация без внешних зависимостей и с максимально явной типизацией.
 *
 * @template T Тип значения, хранимого в списке.
 */
export class LinkedList<T> implements IDoublyLinkedList<T> {
  public head: Node<T> | null = null;
  public tail: Node<T> | null = null;

  constructor() {}

  /**
   * Добавляет элемент в конец списка.
   * @param value Значение, которое нужно добавить в хвост списка.
   */
  addEnd(value: T): void {
    const node = new Node<T>(value);
    if (!this.tail) {
      // список пустой
      this.head = node;
    } else {
      node.prev = this.tail;
      this.tail.next = node;
    }
    this.tail = node;
  }

  /**
   * Добавляет элемент в начало списка.
   * @param value Значение, которое нужно добавить в старт списка.
   */
  addStart(value: T): void {
    const node = new Node<T>(value);
    if (!this.head) {
      // список пустой
      this.tail = node;
    } else {
      node.next = this.head;
      this.head.prev = node;
    }
    this.head = node;
  }

  /**
   * Удаляет элемент с конца списка.
   * @returns Значение удалённого элемента или null, если список пуст.
   */
  removeEnd(): T | null {
    if (!this.tail) return null;
    const removed = this.tail;
    if (!this.tail.prev) {
      // был один элемент
      this.head = null;
      this.tail = null;
    } else {
      this.tail = this.tail.prev;
      if (this.tail) this.tail.next = null;
    }
    return removed.value;
  }

  /**
   * Удаляет элемент с начала списка.
   * @returns Значение удалённого элемента или null, если список пуст.
   */
  removeStart(): T | null {
    if (!this.head) return null;
    const removed = this.head;
    if (!this.head.next) {
      // был один элемент
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
      if (this.head) this.head.prev = null;
    }
    return removed.value;
  }

  /**
   * Проверяет, пуст ли список.
   * @returns true, если список пуст.
   */
  isEmpty(): boolean {
    return this.head === null;
  }

  /**
   * Очищает список.
   */
  clear(): void {
    this.head = null;
    this.tail = null;
  }
}