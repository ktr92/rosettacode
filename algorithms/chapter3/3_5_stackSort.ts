import { INode, IStack } from "../../types/stack.type";

export class Node<T> implements INode<T> {
  /** Значение узла. */
  public value: T;
  /** Следующий узел в стеке (или null, если этот узел последний). */
  public next: Node<T> | null = null;

  public min: T | null = null;

  /**
   * Конструктор узла.
   * @param value Значение, которое хранит узел.
   */
  constructor(value: T) {
    this.value = value;
  }
}

/**
 * Реализация стека (LIFO) на связном списке.
 * Поддерживает операции:
 * - add(value): поместить значение на вершину стека
 * - get(): извлечь и вернуть значение с вершины стека
 * - peek(): вернуть значение на вершине без удаления
 * - clear(): очистить стек
 *
 * Все операции выполняются за константное время O(1).
 *
 * @template T Тип значения, хранимого в стеке.
 */
export class Stack<T> implements IStack<T> {
  /** Головной узел стека (верхушка). */
  public head: Node<T> | null = null;

  /**
   * Добавляет значение на вершину стека.
   * Создаёт новый узел и помещает его перед текущей головой.
   * @param value Значение, которое нужно поместить в стек.
   */
  add(value: T): void {
    const node = new Node<T>(value);
    node.next = this.head;
    this.head = node;
    if (!node.next) {
      node.min = value;
    } else {
      node.min = value < node.next?.min ? value : node.next?.min;
    }
  }

  /**
   * Удаляет и возвращает значение с вершины стека.
   * Если стек пуст, возвращает null.
   * @returns Значение верхнего элемента или null, если стек пуст.
   */
  get(): T | null {
    const head = this.head;
    if (!head) return null;
    this.head = head.next;
    return head.value;
  }

  /**
   * Возвращает значение на вершине стека без удаления.
   * @returns Значение верхнего элемента или undefined, если стек пуст.
   */
  peek(): T | undefined {
    return this.head?.value;
  }

  /**
   * Возвращает минимальное значение стека O(1).
   * @returns Значение минимального элемента или undefined, если стек пуст.
   */
  min(): T | null {
    if (!this.head) return null;
    return this.head?.min;
  }

  sort() {
    const tmp = new Stack();

    while (!this.isEmpty()) {
      const item = this.pop();
      if (!tmp.head) {
        tmp.add(item?.value);
        continue;
      }

      while (item && item?.value > tmp.head?.value && !tmp.isEmpty()) {
        this.add(tmp.pop()?.value);
      }

      tmp.add(item?.value);
    }

    return tmp;
  }

  pop() {
    const head = this.head;
    if (!head) return null;
    this.head = head.next;
    return head;
  }

  isEmpty() {
    return this.head === null;
  }

  /**
   * Очищает стек.
   */
  clear(): void {
    this.head = null;
  }
}

const st = new Stack();

st.add(2);
st.add(1);
st.add(3);
st.add(2);
st.add(7);
st.add(5);

console.log(st.sort());
