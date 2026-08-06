class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function endFirst(first: ListNode, second: ListNode) {
  second.next = first;
  return second;
}

function firstToSecond(first: ListNode, second: ListNode) {
  const next1 = first?.next;
  const next2 = second?.next;
  first.next = second;
  first.next.next = mergeTwoLists(next1, next2);
}

function firstToNext(first: ListNode, second: ListNode) {
  first.next = mergeTwoLists(first?.next, second);
}

function appendingToFirst(first: ListNode, second: ListNode) {
  if (second.next) {
    if (first.next) {
      if (second.val <= first.next.val) {
        firstToSecond(first, second);
      } else {
        firstToNext(first, second);
      }
    } else {
      return endFirst(second, first);
    }
  } else {
    if (!first.next) {
      return endFirst(second, first);
    } else {
      const next1 = second;
      const next2 = first.next;
      first.next = mergeTwoLists(next1, next2);
    }
  }
  return first;
}

function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null,
): ListNode | null {
  if (!list2) {
    return list1 ? list1 : null;
  }
  if (!list1) {
    return list2 ? list2 : null;
  }
  if (list1.val <= list2.val) {
    return appendingToFirst(list1, list2);
  } else {
    return appendingToFirst(list2, list1);
  }
}
