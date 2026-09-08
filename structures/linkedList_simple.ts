export class ListNode<T> {
  val: T | null;
  next: ListNode<T> | null;
  constructor(val?: T, next?: ListNode<T> | null) {
    this.val = val === undefined ? null : val;
    this.next = next === undefined ? null : next;
  }
}

export function createLinkedList<T>(arr: T[]): ListNode<T> {
  const head = new ListNode(arr[i], arr[1] ? new ListNode(arr[1]) : null);

  for (let i = 1; i < array.length; i++) {
    const element = new ListNode(
      arr[i],
      arr[i + 1] ? new ListNode(arr[i + 1]) : null,
    );
  }

  return head;
}
