import { Node } from "./types/queue.type"
import { IQueue } from "./types/queue.type"

/**
 * Однонаправленная очередь (FIFO) на связном списке.
 * Поддерживает:
 * - enqueue(value): добавление в хвост
 * - dequeue(): удаление с головы
 * - isEmpty(): проверка на пустоту
 *
 * Все операции выполняются за константное время O(1).
 *
 * @template T Тип значения, хранимого в очереди.
 */
export class Queue<T> implements IQueue<T> {
  /** Головной узел очереди (с начала). */
  private head: Node<T> | null = null;
  /** Хвостовой узел очереди (последний добавленный). */
  private tail: Node<T> | null = null;

  constructor() {}

  /**
   * Добавляет элемент в конец очереди.
   * Если очередь пуста, новый элемент становится и головой, и хвостом.
   * @param value Значение, которое нужно добавить в очередь.
   */
  enqueue(value: T): void {
    const node = new Node<T>(value);
    if (this.tail) {
      // Добавляем за хвостом
      this.tail.next = node;
    } else {
      // Очередь пустая — устанавливаем голову
      this.head = node;
    }
    // Новый элемент становится хвостом
    this.tail = node;
  }

  /**
   * Удаляет и возвращает элемент из головы очереди.
   * При пустой очереди возвращает null.
   * Обязательно очищаем хвост, если после dequeue очереди становится пустой.
   * @returns Значение удалённого элемента или null, если очередь пустая.
   */
  dequeue(): T | null {
    const head = this.head;
    if (!head) {
      // Пустая очередь
      this.tail = null;
      return null;
    }
    // Поднимаем голову на следующий узел
    this.head = head.next;

    // Если после удаления головы очереди больше нет элементов — чистим хвост
    if (this.head === null) {
      this.tail = null;
    }

    // Возвращаем значение удалённого узла
    return head.value;
  }

  /**
   * Проверяет, пустая ли очередь.
   * @returns true, если очередь пуста; иначе false.
   */
  isEmpty(): boolean {
    return this.head === null;
  }
}

export default Queue;