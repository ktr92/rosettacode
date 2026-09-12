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

  /**
   * Очищает стек.
   */
  clear(): void {
    this.head = null;
  }
}

export class setOfStacks<T> {
  public set: Stack<T>[] = [];
  private size: number = 0;

  constructor(public limit: number) {
    if (limit < 1) throw new Error("стек всегда будет пуст");
    const stack = new Stack<T>();
    this.set.push(stack);
  }

  push(value: T) {
    if (this.size < this.limit) {
      this.size++;
    } else {
      this.size = 1;
      const stack = new Stack<T>();
      this.set.push(stack);
    }
    this.set[this.set.length - 1]?.add(value);
  }

  pop() {
   if (this.size < 1) {
    this.size = this.limit;
    this.set.length = this.set.length - 1;
   }

   this.size--
   return this.set[this.set.length - 1]?.get()
  }

  popAt(index: number) {
   const toremove =  this.set.splice(index, 1)
   return toremove;
  }
}

const st = new setOfStacks(3);

st.push(1);
st.push(2);
st.push(3);
st.push(4);
st.push(5);
st.push(6);
st.push(7);
console.log(st.set);
/* console.log(st.popAt(1)); */
console.log(st.pop())
console.log(st.pop())
console.log(st.pop())
console.log(st.pop())
console.log(st.pop())

console.log(st.set);
