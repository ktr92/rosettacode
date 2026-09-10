export class SinglyListNode<T> {
  val: T | null;
  next: SinglyListNode<T> | null;
  constructor(val?: T, next?: SinglyListNode<T> | null) {
    this.val = val === undefined ? null : val;
    this.next = next === undefined ? null : next;
  }
}
export class ListNode<T> {
  val: T | null;
  next: ListNode<T> | null;
  prev: ListNode<T> | null;
  constructor(val?: T, next?: ListNode<T> | null, prev?: ListNode<T> | null) {
    this.val = val === undefined ? null : val;
    this.next = next === undefined ? null : next;
    this.prev = prev === undefined ? null : prev;
  }
}

export function createLinkedList<T>(arr: T[]): ListNode<T> {
  

  const head = new ListNode(arr[0], null, null);
  let list = head;

  // ИСПРАВЛЕНО: строго меньше (<), чтобы не захватывать лишний undefined
  for (let i = 1; i < arr.length; i++) {
    list.next = new ListNode(arr[i], null, list);
    list = list.next;
  }

  return head;
}

export function linkedListToArray<T>(list: ListNode<T> | SinglyListNode<T>) {
  const res = []
  while (list && list.next) {
    res.push(list.val)
    list = list.next
  }
  return res
}


export function createSinglyLinkedList<T>(arr: T[]): SinglyListNode<T> {
  const head = { val: arr[0], next: null } as SinglyListNode<T>;
  let current = head;
  for (let i = 1; i < arr.length; i++) {
    current.next = { val: arr[i], next: null } as SinglyListNode<T>;
    current = current.next;
  }
  return head;
}


export function linkedSinglyListToArray<T>(list: SinglyListNode<T>) {
  const res = []
  while (list) {
    res.push(list.val)
    list = list.next
  }
  return res
}

