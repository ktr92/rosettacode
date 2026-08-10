class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function getNext(first: ListNode | null, second: ListNode | null) {
  if (!first || !first.next) {
    first = second;
    second = null;
  } 
  return {first, second};
}

function summNext(result: ListNode, l1: ListNode | null, l2?: ListNode | null) {
  if (!l1) {
    return;
  }
  let summ = result.val + l1.val;
  if (l2) {
    summ += l2.val;
  }
  result.val = summ - 10 >= 0 ? summ - 10 : summ;
  result.next = new ListNode(0, null);
  result.next.val = summ - 10 >= 0 ? 1 : 0;
  const {first, second} = getNext(l1, l2);
  if (first?.next) {
    if (second) {
      summNext(result.next, first.next, second.next);
    } else {
      summNext(result.next, first.next);
    }
  } else {
    if (result.next.val === 0) {
      result.next = null;
    }
  }
}

function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null,
): ListNode | null {
  let result = new ListNode(0, null);
  summNext(result, l1, l2);
  return result;
}

module.exports = addTwoNumbers;
