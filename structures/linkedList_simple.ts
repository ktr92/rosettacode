export class SinglyListNode<T> {
  val: T | null;
  next: ListNode<T> | null;
  constructor(val?: T, next?: ListNode<T> | null) {
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

  for (let i = 1; i <= arr.length; i++) {
    list.next = new ListNode(arr[i], null, list);
    list = list.next;
  }

  return head;
}

export function linkedListToArray<T>(list: ListNode<T>) {
  const res = []
  while (list && list.next) {
    res.push(list.val)
    list = list.next
  }
  return res
}

